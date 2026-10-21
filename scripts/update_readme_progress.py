#!/usr/bin/env python3
"""Recalculate overall freeCodeCamp and certification-project progress in README.md."""
from pathlib import Path
import re
import sys

README = Path(__file__).resolve().parents[1] / "README.md"
OVERALL_START = "<!-- OVERALL_PROGRESS_START -->"
OVERALL_END = "<!-- OVERALL_PROGRESS_END -->"
PROJECT_START = "<!-- PROJECT_PROGRESS_START -->"
PROJECT_END = "<!-- PROJECT_PROGRESS_END -->"
TOPICS_START_HEADING = "## ✅ Topics Completed"
PROJECT_HEADING = "## 🧪 freeCodeCamp Certification Projects"
CHECKBOX_RE = re.compile(r"^\s*-\s*\[([ xX])\]\s+", re.MULTILINE)
# Matches progress values in Markdown table cells, such as: | Objects | 41 / 61 |
TOPIC_PROGRESS_RE = re.compile(r"^\|[^\n]*?\|\s*(\d+)\s*/\s*(\d+)\s*\|", re.MULTILINE)


def replace_marked_block(text: str, start_marker: str, end_marker: str, body: str) -> str:
    if start_marker not in text or end_marker not in text:
        raise ValueError(f"Missing README markers: {start_marker} / {end_marker}")
    start = text.index(start_marker) + len(start_marker)
    end = text.index(end_marker, start)
    return text[:start] + "\n" + body + "\n" + text[end:]


def main() -> int:
    text = README.read_text(encoding="utf-8")

    for marker in (OVERALL_START, OVERALL_END, PROJECT_START, PROJECT_END):
        if marker not in text:
            print(f"Progress marker is missing from README.md: {marker}", file=sys.stderr)
            return 1
    if TOPICS_START_HEADING not in text or PROJECT_HEADING not in text:
        print("Could not find the topic and project sections in README.md.", file=sys.stderr)
        return 1

    topic_start = text.index(TOPICS_START_HEADING)
    project_heading_start = text.index(PROJECT_HEADING)
    if project_heading_start <= topic_start:
        print("The topics section must appear before the certification-project section.", file=sys.stderr)
        return 1

    topic_block = text[topic_start:project_heading_start]
    topic_matches = TOPIC_PROGRESS_RE.findall(topic_block)
    if not topic_matches:
        print("No lesson progress counts found in the topic tables.", file=sys.stderr)
        return 1

    lesson_completed = sum(int(done) for done, _ in topic_matches)
    lesson_total = sum(int(total) for _, total in topic_matches)
    if lesson_total <= 0 or lesson_completed < 0 or lesson_completed > lesson_total:
        print("The lesson progress values appear invalid.", file=sys.stderr)
        return 1

    next_heading = re.search(r"^##\s+", text[project_heading_start + len(PROJECT_HEADING):], flags=re.MULTILINE)
    project_end = (project_heading_start + len(PROJECT_HEADING) + next_heading.start()) if next_heading else len(text)
    project_section = text[project_heading_start:project_end]
    statuses = CHECKBOX_RE.findall(project_section)
    if not statuses:
        print("No project checkboxes found in the certification-project section.", file=sys.stderr)
        return 1

    projects_completed = sum(status.strip().lower() == "x" for status in statuses)
    projects_total = len(statuses)
    overall_completed = lesson_completed + projects_completed
    overall_total = lesson_total + projects_total
    overall_percentage = overall_completed / overall_total * 100
    projects_percentage = projects_completed / projects_total * 100

    overall_body = f"**Overall freeCodeCamp JavaScript progress:** {overall_completed:,} / {overall_total:,} steps completed ({overall_percentage:.1f}%)."
    project_body = f"**Certification project progress:** {projects_completed} / {projects_total} completed ({projects_percentage:.1f}%)."
    updated = replace_marked_block(text, OVERALL_START, OVERALL_END, overall_body)
    updated = replace_marked_block(updated, PROJECT_START, PROJECT_END, project_body)

    # Keep the shields.io progress badge synchronized with the calculated overall percentage.
    badge_pattern = re.compile(r"!\[Overall Progress\]\(https://img\.shields\.io/badge/Overall_Progress-[^?]+(\?style=for-the-badge)\)")
    badge_replacement = f"![Overall Progress](https://img.shields.io/badge/Overall_Progress-{overall_percentage:.1f}%25-blue?style=for-the-badge)"
    updated, badge_count = badge_pattern.subn(badge_replacement, updated, count=1)
    if badge_count == 0:
        print("Warning: could not find the Overall Progress badge to update.", file=sys.stderr)

    if updated != text:
        README.write_text(updated, encoding="utf-8")
    print(f"Overall progress: {overall_completed}/{overall_total} ({overall_percentage:.1f}%).")
    print(f"Certification projects: {projects_completed}/{projects_total} ({projects_percentage:.1f}%).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

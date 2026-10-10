const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsentiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

testButton.addEventListener("click", function getFlags() {
    const pattern = patternInput.value;
    const text = testString.textContent;

    const flags =
        (caseInsensitive.checked ? "i" : "") + (globalFlag.checked ? "g" : "");

    result.replaceChildren();

    try {
        const regex = new RegExp(pattern, flags);

        const matches = [
            ...text.matchAll(
                new RegExp(
                    regex.source,
                    regex.flags.includes("g") ? regex.flags : regex.flags + "g",
                ),
            ),
        ];

        if (matches.length === 0) {
            result.textContent = "No matches found.";
            return;
        }

        let lastIndex = 0;

        for (const match of matches) {
            const matchIndex = match.index;
            const matchedText = match[0];

            // Add the text before the match.
            result.append(
                document.createTextNode(text.slice(lastIndex, matchIndex)),
            );

            // Create the highlighted match.
            const mark = document.createElement("mark");
            mark.textContent = matchedText;
            result.append(mark);

            lastIndex = matchIndex + matchedText.length;
        }

        // Add any remaining text.
        result.append(document.createTextNode(text.slice(lastIndex)));
    } catch (error) {
        result.textContent = `Invalid regex: ${error.message}`;
    }
});

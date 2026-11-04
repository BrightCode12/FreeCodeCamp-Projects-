const projectStatus = {
	PENDING: {
		description: "Pending Execution",
	},
	SUCCESS: {
		description: "Executed Successfully",
	},
	FAILURE: {
		description: "Execution Failed",
	},
};

class ProjectIdea {
	constructor(title, description) {
		this.description = description;
		this.title = title;
		this.status = projectStatus.PENDING;
	}
	updateProjectStatus(newStatus) {
		this.status = newStatus;
	}
}
class ProjectIdeaBoard {
	constructor(title) {
		this.title = title;
		this.ideas = [];
	}
	pin(idea) {
		this.ideas.push(idea);
	}
	unpin(idea) {
		const index = this.ideas.indexOf(idea);
		if (index !== -1) {
			this.ideas.splice(index, 1);
		} else {
			alert("Idea not found");
		}
	}
	count() {
		return this.ideas.length;
	}
	formatToString() {
		let result = `${this.title} has ${this.ideas.length} idea(s)\n`;

		this.ideas.forEach((idea) => {
			result += `${idea.title} (${idea.status.description || idea.status}) - ${idea.description}\n`;
        });
        return result;
	}
}

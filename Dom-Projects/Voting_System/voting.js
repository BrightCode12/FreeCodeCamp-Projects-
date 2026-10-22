const poll = new Map();

const addOption = (option) => {
	if (!option || option.trim() === "") {
		return "Option cannot be empty.";
	}
	if (poll.has(option)) {
		return `Option "${option}" already exists.`;
	}

	poll.set(option, new Set());
	return `Option "${option}" added to the poll.`;
};

addOption("Turkey");
addOption("Morocco");
addOption("Spain");


const vote = (option, voterId) => {
	if (poll.has(option)) {
		const voters = poll.get(option);
		if (voters.has(voterId)) {
			return `Voter ${voterId} has already voted for "${option}"`;
		} else {
			voters.add(voterId);
			return `Voter ${voterId} voted for "${option}".`;
		}
	}
	return `Option "${option}" does not exist.`;
};

const displayResults = () => {
    let result = "Poll Results:";
    
    const sortedPoll = [...poll.entries()].sort((a, b) => b[1].size - a[1].size);
	sortedPoll.forEach(([voters, option]) => {
		result += `\n${option}: ${voters.size} votes`;
	});
	return result;
};

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");

displayResults();

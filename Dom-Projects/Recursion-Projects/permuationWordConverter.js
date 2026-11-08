const permute = (word, used = [], results = [], current = []) => {

    if (used.length === 0) used = new Array(word.length).fill(false);
        

	if (current.length === word.length) {
		results.push(current.join(""));
		return results;
    }
    const seen = new Set();

	for (let i = 0; i < word.length; i++) {
        if (used[i] || seen.has(word[i])) continue;
        seen.add(word[i]);

		used[i] = true;
		current.push(word[i]);

        permute(word, used, results, current);

		current.pop();
		used[i] = false;
	}
	return results;
};

console.log(permute("Monkey"));

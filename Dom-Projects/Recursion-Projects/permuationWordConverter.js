const permute = (word) => {
    const chars = word.toLowerCase().split(" ");
    const used = new Array(chars.length).fill(false);
    const results = [];
    const current = [];

    const backTrack = () => {
        if (current.length === chars.length) {
            results.push(current.join(""));
            return;
        }
        for (let i = 0; i < chars.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            current.push(chars[i]);

            backTrack();

            current.pop();
            used[i] = false;
        }
    };
    backTrack();
    return results;
};

console.log(permute("Monkey"));

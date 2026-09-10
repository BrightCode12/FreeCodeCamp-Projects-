function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = 0;
    for (let word of words) {
        if (word.length > longestWord) {
            longestWord = word.length;
        }
    }
    return longestWord;
}
console.log (findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
function mutations(arr = []) {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
    for (let letter of secondWord) {
        if (!firstWord.includes(letter)) {
            return false;
        }
    }
    return true;
}
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

function plandiromeChecker(str) {
    const regex = /[^a-z0-9]/g;
    const stripedStr = str.toLowerCase().replace(regex, '');
    const reversedStr = stripedStr.split('').reverse().join('');
    return stripedStr === reversedStr;
}

const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", () => {
	let textInputs = textInput.value;
	if (textInputs.trim() === "") {
        alert("Please input a value");
        result.textContent = "";
        return
	}
	result.textContent = palindromeChecker(textInputs)
		? `${textInputs} is a Palindrome`
		: `${textInputs} is not a Palindrome`;
});
function palindromeChecker(str) {
	const regex = /[^a-z0-9]/g;
	const stripedStr = str.toLowerCase().replace(regex, "");
	const reversedStr = stripedStr.split("").reverse().join("");
	return stripedStr === reversedStr;
}

const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
	let flag = "";
	if (caseInsensitiveFlag.checked) {
		flag += "i";
	}
	if (globalFlag.checked) {
		flag += "g";
	}
	return flag;
}

testButton.addEventListener("click", () => {
	const pattern = regexPattern.value;
	const flags = getFlags();
	const text = stringToTest.textContent;
	let matches = [];

	const reg = new RegExp(pattern, flags);
	const newHtml = text.replace(reg, (match) => {
		matches.push(match);
		return `<span class = "mark">${match}</span>`;
	});
	if (matches.length > 0) {
        stringToTest.innerHTML = newHtml;
        testResult.textContent = matches.join(", ");
	} else {
		testResult.textContent = "no match";
	}
});

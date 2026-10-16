const budgetForm = document.querySelector("#budget-form");
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
	const regex = /[+-\s]/;
	return str.replace(regex, "");
}
function isInvalidInput(str) {
	const regex = /\d+e\d+/i;
	return str.match(regex);
}
function addEntry() {
	const category = entryDropdown.value;
	const targetInputContainer = document.querySelector(
		`#${category}  .input-container`,
	);
	const entryNumber =
		targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
	const HTMLString = `
    <label for ="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
    <input type="text"  id="${category}-${entryNumber}-name" placeholder ="Name">
    <label for ="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
    <input type="number" id="${category}-${entryNumber}-amount" placeholder="Amount" min="0"/>
    `;
	targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function calculateBudget(e) {
	e.preventDefault();
	isError = false;
	const foodInputs = document.querySelectorAll(`#food input[type='number']`);
	const utilitiesInputs = document.querySelectorAll(
		"#utilities input[type='number']",
	);
	const entertainmentInputs = document.querySelectorAll(
		"#entertainment input[type = 'number']",
    );
    const rent = getTotalFromInputs([rentInput]);
}

const food = getTotalFromInputs(foodInputs);
const utilities = getTotalFromInputs(utilitiesInputs);
const entertainment = getTotalFromInputs(entertainmentInputs);

function getTotalFromInputs(list) {
	let total = 0;
	for (const item of list) {
		const currVal = cleanInputString(currVal);
		const invalidInputMatch = isInvalidInput(currVal);
		if (invalidInputMatch) {
			alert(`Invalid Input: ${invalidInputMatch[0]}`);
			isError = true;
			return null;
		}
		total += Number(currVal);
		return total;
	}
} 


addEntryButton.addEventListener("click", addEntry);

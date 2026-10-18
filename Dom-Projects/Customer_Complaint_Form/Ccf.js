const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const orderOn = document.querySelector("#order-no");
const productCode = document.querySelector("#product-code");
const quantity = document.querySelector("#quantity");
const complaintsGroup = document.querySelector("#complaints-group");
const solutionGroup = document.querySelector("#solutions-group");
const other = document.querySelector("#other-complaint");
const others = document.querySelector("#other-solution");
const complaintDescription = document.querySelector("#complaint-description");
const solutionDescription = document.querySelector("#solution-description");

function validateForm() {
	return {
		"full-name": fullName.value.trim() !== "",
		email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()),
		"order-no": /^2024\d{6}$/.test(orderOn.value.trim()),
		"product-code":
			/^[a-zA-Z]{2}[0-9]{2}\-[a-zA-Z]{1}[0-9]{3}\-[a-zA-Z]{2}[0-9]{1}/.test(
				productCode.value,
			),
		quantity: /^[1-9]\d*$/.test(quantity.value),
		"complaints-group":
			complaintsGroup.querySelector('input[type="checkbox"]:checked') !==
			null,
		"complaint-description":
			!other.checked || complaintDescription.value.trim().length >= 20,
		"solutions-group":
			solutionGroup.querySelector('input[type="radio"]:checked') !== null,

		"solution-description":
			!others.checked || solutionDescription.value.trim().length >= 20,
	};
}

fullName.addEventListener("change", () => {
	const isFullNameValid = fullName.value.trim() !== "";
	isFullNameValid
		? (fullName.style.borderColor = "green")
		: (fullName.style.borderColor = "red");
});

email.addEventListener("change", () => {
	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
	isEmailValid
		? (email.style.borderColor = "green")
		: (email.style.borderColor = "red");
});

orderOn.addEventListener("change", () => {
	const isOrderNo = /^2024\d{6}$/.test(orderOn.value.trim());
	isOrderNo
		? (orderOn.style.borderColor = "green")
		: (orderOn.style.borderColor = "red");
});

productCode.addEventListener("change", () => {
	const isProductNumberValid =
		/^[a-zA-Z]{2}[0-9]{2}\-[a-zA-Z]{1}[0-9]{3}\-[a-zA-Z]{2}[0-9]{1}/.test(
			productCode.value,
		);

	isProductNumberValid
		? (productCode.style.borderColor = "green")
		: (productCode.style.borderColor = "red");
});

quantity.addEventListener("change", () => {
	const isQuantityValid = /^[1-9]\d*$/.test(quantity.value);

	isQuantityValid
		? (quantity.style.borderColor = "green")
		: (quantity.style.borderColor = "red");
});

complaintsGroup.addEventListener("change", () => {
	const isCheckedValid =
		complaintsGroup.querySelector('input[type="checkbox"]:checked') !==
		null;
	isCheckedValid
		? (complaintsGroup.style.borderColor = "green")
		: (complaintsGroup.style.borderColor = "red");
});

complaintDescription.addEventListener("change", () => {
	const isComplaintValid =
		!other.checked || complaintDescription.value.trim().length >= 20;

	isComplaintValid
		? (complaintDescription.style.borderColor = "green")
		: (complaintDescription.style.borderColor = "red");
});

solutionGroup.addEventListener("change", () => {
	const isRadioChecked =
		solutionGroup.querySelector('input[type="radio"]:checked') !== null;

	isRadioChecked
		? (solutionGroup.style.borderColor = "green")
		: (solutionGroup.style.borderColor = "red");
});

solutionDescription.addEventListener("change", () => {
	const isSolutionValid =
		!others.checked || solutionDescription.value.trim().length >= 20;

	isSolutionValid
		? (solutionDescription.style.borderColor = "green")
		: (solutionDescription.style.borderColor = "red");
});

function isValid(validateForm) {
	return Object.values(validateForm).every((field) => field === true);
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

	event.preventDefault();

	const formIsCorrect = isValid(validateForm());

	
	if (formIsCorrect) {
		
	}
});
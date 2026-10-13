const validateBtn = document.querySelector("#validate-btn");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const themeText = themeToggle.querySelector("span");

themeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	const isDark = document.body.classList.contains("dark-theme");

	themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
	themeText.textContent = isDark ? "Light mode" : "Dark Mode";
	themeToggle.setAttribute(
		"aria-label",
		isDark ? "Switch to light theme" : "Switch to dark theme",
	);
});

function isUserNameValid(username) {
	const regexUsername = /^[a-zA-Z0-9_-]{8,16}$/;
	return regexUsername.test(username);
}

function isEmailValid(email) {
	const regexEmail = /^[a-zA-z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regexEmail.test(email);
}

function isPhoneNumberValid(tel) {
	const regexPhone = /^(\+?234|0)[789][0-9]{9}$/;
	return regexPhone.test(tel);
}

function isPinValid(pin) {
	const regexPin = /^[0-9]{4,4}$/;
	return regexPin.test(pin);
}

function isPasswordValid(password) {
	const regexPin =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
	return regexPin.test(password);
}

function errorMessage(inputElement, message) {
	const errorMessage = document.querySelector(`#${inputElement}-feedback`);
	errorMessage.textContent = message;
	// errorMessage.classList.add("invalid");
}

function validation(event) {
	event.preventDefault();
	const username = document.querySelector("#username");
	const email = document.querySelector("#email");
	const phoneNumber = document.querySelector("#phone-number");
	const pin = document.querySelector("#pin");
	const password = document.querySelector("#password");
	const confirmPassword = document.querySelector("#confirm-password");

	errorMessage("username", "");
	errorMessage("email", "");
	errorMessage("phone-number", "");
	errorMessage("pin", "");
	errorMessage("password", "");
	errorMessage("confirm-password", "");

	let isValid = true;

	if (!isUserNameValid(username.value)) {
		errorMessage(
			"username",
			"Username must be 8-16 characters (letters, numbers, _, -).",
		);
		isValid = false;
	}

	if (!isEmailValid(email.value)) {
		errorMessage("email", "Please enter a valid email address.");
		isValid = false;
	}

	if (!isPhoneNumberValid(phoneNumber.value)) {
		errorMessage(
			"phone-number",
			"Please enter a valid phone number (e.g., 080... or +234...).",
		);
		isValid = false;
	}

	if (!isPinValid(pin.value)) {
		errorMessage("pin", "PIN must be exactly 4 digits.");
		isValid = false;
	}

	if (!isPasswordValid(password.value)) {
		errorMessage(
			"password",
			"Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
		);
		isValid = false;
	}

	if (password.value !== confirmPassword.value) {
		errorMessage("confirm-password", "Passwords do not match.");
		isValid = false;
	}

	return isValid;
}
validateBtn.addEventListener("click", validation);

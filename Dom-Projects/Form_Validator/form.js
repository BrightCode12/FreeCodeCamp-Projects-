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

function setValidationState(inputElement, feedbackElement, isValid, message) {
	const state = isValid ? "valid" : "invalid";
	const group = inputElement.closest(".input-group");

	inputElement.classList.remove("valid", "invalid");
	inputElement.classList.add(state);
	inputElement.setAttribute("aria-invalid", String(!isValid));
	group.classList.remove("valid", "invalid");
	group.classList.add(state);
	feedbackElement.classList.remove("success", "error");
	feedbackElement.classList.add(isValid ? "success" : "error");
	feedbackElement.textContent = message;
}

function isUserNameValid(username, feedback) {
	const isValid = /^[a-zA-Z0-9_-]{8,16}$/.test(username.value.trim());
	setValidationState(
		username,
		feedback,
		isValid,
		isValid
			? "Username is valid."
			: "Username must be 8-16 characters (letters, numbers, _, -).",
	);
	return isValid;
}

function isEmailValid(email, feedback) {
	const isValid = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
		email.value.trim(),
	);
	setValidationState(
		email,
		feedback,
		isValid,
		isValid ? "Email is valid." : "Please enter a valid email address.",
	);
	return isValid;
}

function isPhoneNumberValid(phoneNumber, feedback) {
	const isValid = /^(\+?234|0)[789][0-9]{9}$/.test(
		phoneNumber.value.trim(),
	);
	setValidationState(
		phoneNumber,
		feedback,
		isValid,
		isValid
			? "Phone number is valid."
			: "Please enter a valid phone number (e.g., 080... or +234...).",
	);
	return isValid;
}

function isPinValid(pin, feedback) {
	const isValid = /^\d{4}$/.test(pin.value.trim());
	setValidationState(
		pin,
		feedback,
		isValid,
		isValid ? "PIN is valid." : "PIN must be exactly 4 digits.",
	);
	return isValid;
}

function isPasswordValid(password, feedback) {
	const isValid =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
			password.value,
		);
	setValidationState(
		password,
		feedback,
		isValid,
		isValid
			? "Password is valid."
			: "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
	);
	return isValid;
}

function isConfirmPasswordValid(password, confirmPassword, feedback) {
	const isValid =
		confirmPassword.value.length > 0 &&
		password.value === confirmPassword.value;
	setValidationState(
		confirmPassword,
		feedback,
		isValid,
		isValid ? "Passwords match." : "Passwords do not match.",
	);
	return isValid;
}

function validation(event) {
	event.preventDefault();

	const fields = {
		username: document.querySelector("#username"),
		email: document.querySelector("#email"),
		phoneNumber: document.querySelector("#phone-number"),
		pin: document.querySelector("#pin"),
		password: document.querySelector("#password"),
		confirmPassword: document.querySelector("#confirm-password"),
	};
	const feedback = {
		username: document.querySelector("#username-feedback"),
		email: document.querySelector("#email-feedback"),
		phoneNumber: document.querySelector("#phone-feedback"),
		pin: document.querySelector("#pin-feedback"),
		password: document.querySelector("#password-feedback"),
		confirmPassword: document.querySelector("#confirm-feedback"),
	};

	const results = [
		isUserNameValid(fields.username, feedback.username),
		isEmailValid(fields.email, feedback.email),
		isPhoneNumberValid(fields.phoneNumber, feedback.phoneNumber),
		isPinValid(fields.pin, feedback.pin),
		isPasswordValid(fields.password, feedback.password),
		isConfirmPasswordValid(
			fields.password,
			fields.confirmPassword,
			feedback.confirmPassword,
		),
	];
	const formResult = document.querySelector("#form-result");
	const isValid = results.every(Boolean);

	formResult.classList.remove("success", "error");
	formResult.classList.add(isValid ? "success" : "error");
	formResult.textContent = isValid
		? "All fields are valid."
		: "Please correct the highlighted fields.";
}

validateBtn.addEventListener("click", validation);

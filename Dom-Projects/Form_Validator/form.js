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

function Message(inputElement, message) {
	const Message = document.querySelector(`#${inputElement}-feedback`);
	Message.textContent = message;
}

function validation(event) {
	event.preventDefault();
	const username = document.querySelector("#username");
	const email = document.querySelector("#email");
	const phoneNumber = document.querySelector("#phone-number");
	const pin = document.querySelector("#pin");
	const password = document.querySelector("#password");
	const confirmPassword = document.querySelector("#confirm-password");

	Message("username", "");
	Message("email", "");
	Message("phone-number", "");
	Message("pin", "");
	Message("password", "");
	Message("confirm-password", "");

	if (password.value !== confirmPassword.value) {
		Message("confirm-password", "Passwords do not match.");
	}
}
let isValid = true;

function isUserNameValid(username) {
	const regexUsername = /^[a-zA-Z0-9_-]{8,16}$/;
	
	if (regexUsername.test(username)) {
		Message("username", "Username is  valid");
	} else
		Message(
			"username",
			"Username must be 8-16 characters (letters, numbers, _, -).",
		);
}

function isEmailValid(email) {
	const regexEmail = /^[a-zA-z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (regexEmail.test(email)) {
		Message("email", "Email is valid");
		isValid = false;
	} else {
		Message("email", "Please enter a valid email address.");
	}
}

function isPhoneNumberValid(tel) {
	const regexPhone = /^(\+?234|0)[789][0-9]{9}$/;
	if (regexPhone.test(tel)) {
		Message("phone-number", "Phone number is valid");
	} else {
		Message(
			"phone-number",
			"Please enter a valid phone number (e.g., 080... or +234...).",
		);
	}
}

function isPinValid(pin) {
	const regexPin = /^\d{4}$/;
	if (regexPin.test(pin)) {
		Message("pin", "Pin is valid");
	} else {
		Message("pin", "PIN must be exactly 4 digits.");
	}
}

function isPasswordValid(password) {
	const regexPin =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
	if (regexPin.test(password)) {
		Message("password", "Password is valid");
	} else {
		Message(
			"password",
			"Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
		);
	}
}

validateBtn.addEventListener("click", validation);

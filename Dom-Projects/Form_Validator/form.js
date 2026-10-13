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

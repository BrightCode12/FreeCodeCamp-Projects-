const themeArray = [
	{
		name: "Dark",
		message: "The night is yours - Dark theme is on!",
	},
	{
		name: "🌊 Ocean Focus",
		message: "Clean, calm, and excellent for long study sessions.",
	},
	{
		name: "🌑 Midnight",
		message: "The world is quiet. Build something great.",
	},
	{
		name: "🧊 Arctic",
		message: "Clear mind. Clear task. Clear result.",
	},
];
const themeSwitcherBtn = document.querySelector("#theme-switcher-button");

const themeDropDown = document.querySelector("#theme-dropdown");
const textBox = document.querySelector("#textBox");
const selectedTheme = document.querySelectorAll("li");

themeSwitcherBtn.addEventListener("click", () => {
	const isExpanded =
		themeSwitcherBtn.getAttribute("aria-expanded") === "true";
	themeSwitcherBtn.setAttribute("aria-expanded", String(!isExpanded));
	const dropDown = themeSwitcherBtn.getAttribute("aria-controls");
	const menu = document.getElementById(dropDown);
	menu.hidden = isExpanded;
});

selectedTheme.forEach((Theme) => {
	Theme.addEventListener("click", (e) => {
		const textContent = e.target.textContent;
		const elementId = e.target.id;
		document.body.setAttribute("data-theme", elementId);
		const filteredContent = themeArray.find(
			(theme) => theme.name === textContent,
		);
		textBox.textContent = filteredContent.message;
	});
});

const generateElement = () => Math.floor(Math.random() * 100) + 1;
const generateArray = () => Array.from({ length: 5 }, () => generateElement());
const generateContainer = () => {
	const div = document.createElement("div");
	div.classList.add("array-step");
	return div;
};
const fillArrContainer = (element, arr) => {
	arr.forEach((num) => {
		const bar = document.createElement("span");
		bar.classList.add("array-bar");

		bar.style.height = `${num}%`;

		const label = document.createElement("span");
		label.classList.add("bar-value");
		label.textContent = num;

		bar.appendChild(label);
		element.appendChild(bar);
	});
};
const isOrdered = (a, b) => a <= b;

const swapElements = (arr, index) => {
	if (index < 0 || index >= arr.length - 1) return;
	if (!isOrdered(arr[index], arr[index + 1])) {
		arr[index] = arr[index] + arr[index + 1];
		arr[index + 1] = arr[index] - arr[index + 1];
		arr[index] = arr[index] - arr[index + 1];
	}
};

const highlightCurrentEls = (element, index) => {
	const targets = [element.children[index], element.children[index + 1]];
	targets.forEach((child) => {
		if (child) {
			child.style.borderStyle = "dashed";
			child.style.borderColor = "red";
			child.style.borderWidth = "2px";
		}
	});
};

const generateNumber = document.getElementById("generate-btn");
const startArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

generateNumber.addEventListener("click", () => {
	startArray.textContent = ``;
	arrayContainer.innerHTML = ``;
	arrayContainer.appendChild(startArray);
	fillArrContainer(startArray, generateArray());
});

let currentArray = [];

function bubbleSort() {
	const arr = Array.from(startArray.children).map((span) =>
		Number(span.textContent),
	);

	if (arr.length === 0) return;

	arrayContainer.innerHTML = "";
	arrayContainer.appendChild(startArray);

	Array.from(startArray.children).forEach((span) => {
		span.style.border = "";
	});

	highlightCurrentEls(startArray, 0);

	let swapped = true;
	let isFirstStep = true;

	while (swapped) {
		swapped = false;

		for (let i = 0; i < arr.length - 1; i++) {
			if (isFirstStep) {
				highlightCurrentEls(startArray, i);
				isFirstStep = false;
			} else {
				const stepDiv = generateContainer();
				fillArrContainer(stepDiv, arr);
				highlightCurrentEls(stepDiv, i);
				arrayContainer.appendChild(stepDiv);
			}

			if (!isOrdered(arr[i], arr[i + 1])) {
				swapElements(arr, i);
				swapped = true;
			}
		}
	}
	const sortedDiv = generateContainer();
	fillArrContainer(sortedDiv, arr);
	arrayContainer.appendChild(sortedDiv);
}

sortBtn.addEventListener("click", () => bubbleSort());

const taskForm = document.getElementById("task-form");
const confirmClosedDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

const removeSpecialChars = (value) => {
	const SpecialRegex = /[^a-zA-Z0-9\-\s]/g;
	return value.trim().replace(SpecialRegex, "");
};

const addOrUpdateTask = () => {
	if (!titleInput.value.trim()) {
		alert("Please provide a title");
		return;
	}
	const dataArrIndex = taskData.findIndex(
		(item) => item.id === currentTask.id,
	);
	const taskObj = {
		id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
		title: titleInput.value,
		date: dateInput.value,
		description: descriptionInput.value,
	};
	if (dataArrIndex === -1) {
		taskData.unshift(taskObj);
	} else {
		taskData[dataArrIndex] = taskObj;
	}
	localStorage.setItem("data", JSON.stringify(taskData));
	updateTaskContainer();
	reset();
};

const updateTaskContainer = () => {
	tasksContainer.innerHTML = "";
	taskData.forEach(({ id, title, date, description }) => {
		tasksContainer.innerHTML += `
        <div class = "task" id = "${id}">
        <p><strong>Title:</strong>${title}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Description:</strong>${description}</p>
        <button onClick ="editTask(this)" type= "button" class= "btn" >Edit</button>
        <button onClick ="deleteTask(this)" type= "button" class= "btn">Delete</button>
        </div>`;
	});
};

const deleteTask = (buttonEl) => {
	const dataArrIndex = taskData.findIndex((item) => {
		return item.id === buttonEl.parentElement.id;
	});
	buttonEl.parentElement.remove();
	taskData.splice(dataArrIndex, 1);
	localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (buttonEl) => {
	const dataArrIndex = taskData.findIndex((item) => {
		return item.id === buttonEl.parentElement.id;
	});

	currentTask = taskData[dataArrIndex];

	titleInput.value = currentTask.title;
	dateInput.value = currentTask.date;
	descriptionInput.value = currentTask.description;

	addOrUpdateTaskBtn.innerHTML = "Update Task";

	taskForm.classList.toggle("hidden");
};

const reset = () => {
	addOrUpdateTaskBtn.innerText = "Add Task";
	titleInput.value = "";
	dateInput.value = "";
	descriptionInput.value = "";
	taskForm.classList.toggle("hidden");
	currentTask = {};
};

if (taskData.length) {
	updateTaskContainer();
} else {
}

openTaskFormBtn.addEventListener("click", () => {
	taskForm.classList.toggle("hidden");
});
closeTaskFormBtn.addEventListener("click", () => {
	const formInputsContainValues =
		titleInput.value ||
		dateInput.value ||
		descriptionInput.value.trim() !== "";
	const formInputValuesUpdated =
		titleInput.value !== currentTask.title ||
		dateInput.value !== currentTask.date ||
		descriptionInput.value !== currentTask.description;

	if (formInputsContainValues && formInputValuesUpdated) {
		confirmClosedDialog.showModal();
	} else {
		reset();
	}
});

cancelBtn.addEventListener("click", () => {
	confirmClosedDialog.close();
});

discardBtn.addEventListener("click", () => {
	confirmClosedDialog.close();
	reset();
});

taskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addOrUpdateTask();
});

// For test the localStorage
// const myTaskArr = [
// 	{ task: "Walk the Dog", date: "22-04-2022" },
// 	{ task: "Read some books", date: "02-11-2023" },
// 	{ task: "Watch football", date: "10-08-2021" },
// ];
// localStorage.setItem("data", JSON.stringify(myTaskArr));
// localStorage.removeItem("data");

// const getTaskArr = localStorage.getItem("data");
// console.log(getTaskArr);

// const getTaskArrObj = JSON.parse(getTaskArr);
// console.log(getTaskArrObj);

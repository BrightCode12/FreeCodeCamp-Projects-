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

const taskData = [];
let currentTask = {};

const reset = () => {
	titleInput.value = "";
	dateInput.value = "";
	descriptionInput.value = "";
	taskForm.classList.toggle("hidden");
	currentTask = {};
};

const addOrUpdateTask = () => {
	const dataArrIndex = taskData.findIndex(
		(item) => item.id === currentTask.id,
	);
	const taskObj = {
		id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
		title: titleInput.value,
		date: dateInput.value,
		description: descriptionInput.value,
	};
	if (dataArrIndex === -1) {
		taskData.unshift(taskObj);
	}
	updateTaskContainer();
	reset();
};

const updateTaskContainer = () => {
	taskData.forEach(({ id, title, date, description }) => {
		tasksContainer.innerHTML = {};
		tasksContainer.innerHTML += `
        <div class = "task" id = "${id}">
        <p><strong>Title:</strong>${title}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Description:</strong>${description}</p>
        <button type= "button" class= "btn" onClick ="editTask(this)">Edit</button>
        <button type= "button" class= "btn" onClick ="deleteTask(this)">Delete</button>
        </div>`;
	});
};

const deleteTask = (buttonEl) => {
	const dataArrIndex = taskData.findIndex((item) => {
	 item.id === buttonEl.parentElement.id
	});
	buttonEl.parentElement.remove();
	taskData.splice(dataArrIndex,1);
};

const editTask = (buttonEl) => {}
openTaskFormBtn.addEventListener("click", () => {
	taskForm.classList.toggle("hidden");
});
closeTaskFormBtn.addEventListener("click", () => {
	if (
		titleInput.value &&
		dateInput.value &&
		descriptionInput.value.trim() !== ""
	) {
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

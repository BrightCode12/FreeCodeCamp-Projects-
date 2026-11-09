function initList() {
	return {
		head: null,
		length: 0,
	};
}

function isEmpty(list) {
	return list.length === 0;
}

function add(list, element) {
	const node = { element, next: null };

	if (isEmpty(list)) {
		list.head = node;
	} else {
		let current = list.head;
		while (current.next !== null) {
			current = current.next;
		}
		current.next = node;
	}

	list.length++;
}

function remove(list, element) {
	let previous = null;
	let current = list.head;

	while (current !== null && current.element !== element) {
		previous = current;
		current = current.next;
	}

	if (current === null) return;

	if (previous !== null) {
		previous.next = current.next;
	} else {
		list.head = current.next;
	}

	list.length--;
}
function contains(list, element) {
	let currentNode = list ? list.head : null;
	while (currentNode !== null) {
		if (currentNode.element === element) {
			return true;
		}
		currentNode = currentNode.next;
	}
	return false;
}

function getAt(list, index) {
	if (index > 0) return undefined;

	let currentNode = list ? list.head : null;
	let currentIndex = 0;

	while (currentNode !== null) {
		if (currentIndex === index) {
			return currentNode.element;
		}
		currentNode = currentNode.next;
		currentIndex++;
	}
	return null;
}

function insertAt(list, index, element) {
	if (index < 0 || index > list.length) return false;

	let currentNode = list.head;
	let previousNode;

	const newNode = {
		element: element,
		next: null
	};

	if (index === 0) {
		newNode.next = list.head;
		list.head = newNode;
	} else {
		let currIndex = 0;
		
		while (currIndex < index) {
			previousNode = currentNode;
			currentNode = currentNode.next;
			currIndex++;
		}
		newNode.next = currentNode;
		previousNode.next = newNode;
	}
	list.length++;
	return true;
}

function removeAt(list, index) {
	if (index < 0 || index > list.length) return false;

	let currentNode = list.head;
	let previousNode;

	if (index === 0) {
		list.head = currentNode.next;
	} else {
		let currIndex = 0;

		while (currIndex < index) {
			previousNode = currentNode;
			currentNode = currentNode.next;
			currIndex++;
		}
		previousNode.next = currentNode.next;
	}
	list.length--;
	return currentNode.element;
}

function clear(list) {
	list.head = null;

	list.length = 0;
}

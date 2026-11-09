const initStack = () => {
	return {
		collection: [],
	};
};

const push = (stack, element) => {
	stack.collection.push(element);
};

const pop = (stack) => {
	if (!stack || !stack.collection || stack.collection.length === 0) {
		return undefined;
	}
	return stack.collection.pop();
};

const peek = (stack) => {
	if (!stack || !stack.collection || stack.collection.length === 0) {
		return undefined;
	}
	return stack.collection[stack.collection.length - 1];
};

const isEmpty = (stack) => {
    if (!stack || !stack.collection || stack.collection.length === 0) {
		return true;
    }
    return false;
}

const clear = (stack) => {
    return stack.collection = [];
}
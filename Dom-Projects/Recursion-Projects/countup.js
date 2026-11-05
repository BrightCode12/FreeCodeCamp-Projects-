const countup = (num) => {
	let countArray = [];
	if (num < 1) {
		return [];
	} else {
		countArray = (countup(num - 1));
		countArray.push(num);
		return countArray;
	}
};

const result = countup(10);
console.log(result);

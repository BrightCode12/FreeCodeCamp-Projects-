const selectionSort = (array) => {
	const n = array.length;
	for (let i = 0; i < n - 1; i++) {
		let minIdx = i;
		for (let j = i + 1; j < n; j++) {
			const element = array[j];
			if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
        }
    }
    return array;
};

console.log(
	selectionSort([
		1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
	]),
);

function generateRandomArray(size, maxVal = 100000) {
	return Array.from(
		{ length: size },
		() => Math.floor(Math.random() * maxVal) + 1,
	);
}

const randomList = generateRandomArray(30000);
  
console.log(selectionSort(randomList));
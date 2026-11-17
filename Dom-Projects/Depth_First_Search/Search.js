const depthFirstSearch = (matrix, startNode) => {
	const result = [];
	const visited = new Set();

	const explore = (currentNode) => {
		visited.add(currentNode);
		result.push(currentNode);

		for (let neighbor = 0; neighbor < matrix.length; neighbor++) {
			const isConnected = matrix[currentNode][neighbor] === 1;
			const notVisited = !visited.has(neighbor);

			if (isConnected && notVisited) {
				explore(neighbor);
			}
		}
	};
	explore(startNode);
	return result;
};
console.log(
	depthFirstSearch(
		[
			[0, 1, 0, 0],
			[1, 0, 1, 0],
			[0, 1, 0, 1],
			[0, 0, 1, 0],
		],
		1,
	),
);
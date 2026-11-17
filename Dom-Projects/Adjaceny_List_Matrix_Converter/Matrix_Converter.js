const adjacencyListToMatrix = (adjList) => {
    const numberVertices = Object.keys(adjList).length;

    const matrix = Array.from({ length: numberVertices }, () => 
        Array(numberVertices).fill(0)
    );

    for (let vertex = 0; vertex < numberVertices; vertex++){
        for (const neighbor of adjList[vertex]) {
            matrix[vertex][neighbor] = 1
        }
    }

    for (const row of matrix) {
        console.log(row);
    }
    return matrix;
}

adjacencyListToMatrix({
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [2],
});

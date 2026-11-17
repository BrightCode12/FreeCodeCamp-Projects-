const dfsNQueens = (n) => {
	const results = [];
	const currentCols = [];

	const cols = new Set();
	const mainDiagonals = new Set();
	const antiDiagonals = new Set();

    const backtrack = (row) => {
        
        if (n < 1) {
            return [];
        }
		if (row === n) {
            results.push([...currentCols]);
            return
        }
        for (let col = 0; col < n; col++){
            if (cols.has(col) || mainDiagonals.has(row - col) || antiDiagonals.has(row + col)) {
                continue;
            }

            currentCols.push(col);
            cols.add(col);
            mainDiagonals.add(row - col);
            antiDiagonals.add(row + col);

            backtrack(row + 1);

            currentCols.pop()
            cols.delete(col);
            mainDiagonals.delete(row - col);
			antiDiagonals.delete(row + col);
        }
    };
    backtrack(0);
    return results
};


console.log(dfsNQueens(5));

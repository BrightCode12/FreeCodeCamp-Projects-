// Time Complexity of O(n) and Space Complexity O(n)

const fibonacci = (n) => {
    const sequence = [0, 1];
    
    if (n === 0) return [];
    if (n === 1) return [0, 1];
  
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence;
}

const fibonacciSum = (n) => {
    const sequence = [0, 1];

	if (n === 0) return [];
	if (n === 1) return [0, 1];

	for (let i = 2; i <= n; i++) {
		sequence[i] = sequence[i - 2] + sequence[i - 1];
	}
	return sequence[n];  
}

// Time Complexity of O(n) and Space Complexity 1(n)

const fibonacciSecond = (n) => {
    let prev2 = 0;
    let prev1 = 1;
   

	if (n === 0) return 0;
	if (n === 1) return  1;

	for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
    
        prev2 = prev1
        prev1 = current
	}
	return prev2;
};


console.log(fibonacciSecond(9));

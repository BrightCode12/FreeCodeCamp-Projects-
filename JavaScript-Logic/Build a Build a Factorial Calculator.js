const num = 12;
function factorialCalculator(num) {
    let result = 1
    for (i = 1; i <= num; i++) {
        result = result * i;
        result;
    }
return result;
} 
const factorialNumber = factorialCalculator(num);
const msgFactorial = `The factorial of ${num} is ${factorialNumber}`;
console.log(msgFactorial);
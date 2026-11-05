function rangeOfNumbers  (startNum, endNum) {
    let numbers = [];
    if (startNum === endNum) {
         return [startNum];
    } else {
        numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
    
}
const rangeNumber = rangeOfNumbers(10, 1000);
console.log(rangeNumber);
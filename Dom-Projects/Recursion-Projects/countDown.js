const countDown = (num) => {
    let countArray = [];
    if (num < 1) {
        return []
    } else {
        countArray = countDown(num - 1);
        countArray.unshift(num);
        return countArray;
    }
}
const result = countDown(10);
console.log(result);
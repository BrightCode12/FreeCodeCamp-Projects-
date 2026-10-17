function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let result = "";

  for (let i = 1; i <= num; i++) {
    result += str;
  }

  return result;
}
console.log(repeatStringNumTimes("abc", 4)); // "abcabcabc"
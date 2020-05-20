function sumAll(inputArray) {
  let sumOfNumbers = 0;
  inputArray.sort((a, b) => a - b);
  for (let i = inputArray[0]; i <= inputArray[1]; i += 1) {
    sumOfNumbers += i;
  }
  return sumOfNumbers;
}


export {
  sumAll,
};

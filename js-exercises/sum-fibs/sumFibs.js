function sumFibs(inputNum) {
  const fibonacciArray = [1, 1];
  for (let i = 1; i <= inputNum; i += 1) {
    const eachNewFibonacciTerm = fibonacciArray[i] + fibonacciArray[i - 1];
    fibonacciArray.push(eachNewFibonacciTerm);
    if (fibonacciArray[fibonacciArray.length - 1] >= inputNum) {
      break;
    }
  }

  const oddFibonacciArray = fibonacciArray.filter(elem => elem % 2 !== 0);
  oddFibonacciArray.pop();

  const oddFibonacciArraySum = oddFibonacciArray.reduce((a, b) => a + b, 0);
  return oddFibonacciArraySum;
}


export {
  sumFibs,
};

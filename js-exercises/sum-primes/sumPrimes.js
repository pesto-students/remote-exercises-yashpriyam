function sumPrimes(inputNum) {
  const primeNumArray = [];

  const checkIfPrime = num => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i <= inputNum; i += 1) {
    if (checkIfPrime(i)) {
      primeNumArray.push(i);
    }
  }
  const sum = primeNumArray.reduce((a, b) => a + b, 0);
  return sum;
}


export {
  sumPrimes,
};

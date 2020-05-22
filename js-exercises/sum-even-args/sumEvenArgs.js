const sumEvenArgs = (...args) => {
  let sumOfEvenArgs = 0;
  for (const num of args) {
    sumOfEvenArgs += num % 2 === 0 ? num : 0;
  }
  return sumOfEvenArgs;
};

export { sumEvenArgs };

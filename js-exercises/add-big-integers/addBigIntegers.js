function addBigIntegers(inputIntegerString) {
  const intStringSeparatedArray = inputIntegerString.split('\n');
  const lengthOfEachIntString = intStringSeparatedArray.map(elem => elem.length);
  const largeIntStringArray = input => input.split('');
  const largeIntDigitSplitArrays = intStringSeparatedArray.map(
    eachIntString => largeIntStringArray(eachIntString),
  );
  const finalSum = [];
  let carryForward = 0;
  for (let j = 1; j <= Math.max(...lengthOfEachIntString); j += 1) {
    let sumOfLastDigits = 0;
    const lastDigitsOfEachString = largeIntDigitSplitArrays.map(
      elem => (j <= elem.length ? elem[elem.length - j] : 0),
    );
    for (const a of lastDigitsOfEachString) {
      sumOfLastDigits += parseInt(a, 10);
    }
    let valueOfSum = sumOfLastDigits;
    valueOfSum += parseInt(carryForward, 10);
    const sumToString = valueOfSum.toString();
    if (sumToString.length > 1) {
      const tensUnitsValue = sumToString.split('');
      const [tensDigit, unitDigit] = tensUnitsValue;
      finalSum.push(unitDigit);
      if (j === Math.max(...lengthOfEachIntString)) {
        finalSum.push(tensDigit);
      } else {
        carryForward = tensDigit;
      }
    } else {
      finalSum.push(sumToString);
      carryForward = 0;
    }
  }
  const finalResult = finalSum.reverse().join('');
  return finalResult;
}

export { addBigIntegers };

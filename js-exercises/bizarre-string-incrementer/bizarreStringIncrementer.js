// Start your implementation here
function bizarreStringIncrementer(inputString) {
  const digitsAtEnd = inputString.match(/[0-9]+$/g);
  if (digitsAtEnd) {
    const significantDigits = parseInt(digitsAtEnd[0], 10);
    const incrementedSignificantValue = significantDigits + 1;
    const increasedNumInString = digitsAtEnd[0].slice(0,
      (digitsAtEnd[0].length - incrementedSignificantValue.toString().length))
      + incrementedSignificantValue.toString();
    const digitCountInString = digitsAtEnd[0].length;
    const stringWithoutNumbers = inputString.slice(0,
      inputString.length - (digitCountInString));
    return stringWithoutNumbers + increasedNumInString;
  }
  return `${inputString}1`;
}

export {
  bizarreStringIncrementer,
};

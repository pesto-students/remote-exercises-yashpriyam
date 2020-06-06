function frequencySort(inputArray) {
  const frequencyObject = {};
  inputArray
    .sort()
    .map(el => frequencyObject[el] ? frequencyObject[el] += 1 : frequencyObject[el] = 1);
  const keysArray = Object.keys(frequencyObject);
  keysArray.sort((curr, next) => frequencyObject[next] - frequencyObject[curr]);
  return keysArray;
}

export {
  frequencySort,
};

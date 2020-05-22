function diffArray(array1, array2) {
  const array1Uniques = array1.filter(v => !array2.includes(v));
  const array2Uniques = array2.filter(v => !array1.includes(v));
  const uniqueArray = [...array1Uniques, ...array2Uniques];
  return uniqueArray;
}

export {
  diffArray,
};

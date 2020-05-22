function chunkArrayInGroups(array, chunkSize) {
  const parentArray = [];
  do {
    const splicededArray = array.splice(0, chunkSize);
    parentArray.push(splicededArray);
  }
  while (array.length !== 0);
  return parentArray;
}

export {
  chunkArrayInGroups,
};

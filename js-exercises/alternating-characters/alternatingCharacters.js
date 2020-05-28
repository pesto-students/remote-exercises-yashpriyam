function alternatingCharacters(arr) {
  const deletionCountArray = [];
  for (const a of arr) {
    let numOfCharDeleted = 0;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] === a[i - 1]) {
        numOfCharDeleted += 1;
      }
    }
    deletionCountArray.push(numOfCharDeleted);
  }
  return deletionCountArray;
}

export { alternatingCharacters };

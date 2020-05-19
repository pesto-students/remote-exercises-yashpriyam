
function duplicateLetters(...args) {
  const argsArray = Array.from(...args);
  const letterCountArray = [];

  for (let i = 0; i <= argsArray.length - 1; i += 1) {
    const eachLetterCount = argsArray.filter(item => item === argsArray[i]);
    letterCountArray.push(eachLetterCount.length);
  }
  const allLettersOfSameFrequency = letterCountArray.every(item => item === letterCountArray[0]);
  return allLettersOfSameFrequency ? false : Math.max(...letterCountArray);
}


export {
  duplicateLetters,
};

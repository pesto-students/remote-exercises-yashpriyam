
function duplicateLetters(...args) {
  let argsArray = Array.from(...args);
  let letterCountArray = [];

  for(let i = 0;i<=argsArray.length-1;i++){
    const eachLetterCount = argsArray.filter(item => item === argsArray[i])
    letterCountArray.push(eachLetterCount.length);
  };
  
  const allLettersOfSameFrequency = letterCountArray.every(item => item === letterCountArray[0]);  
  return allLettersOfSameFrequency ? false : Math.max(...letterCount);
};


export {
  duplicateLetters,
};

function longestWordInString(inputSentence) {
  const wordsInInput = inputSentence.split(' ');
  let longestWord = wordsInInput[0];
  let wordLength = wordsInInput[0].length;
  const allInputWordLengthSame = wordsInInput.every(word => word.length === wordLength);
  if (allInputWordLengthSame) {
    return 'All the words in the sentence are of same length';
  }

  for (let i = 0; i <= wordsInInput.length - 1; i += 1) {
    if (wordLength < wordsInInput[i].length) {
      wordLength = wordsInInput[i].length;
      longestWord = wordsInInput[i];
    }
  }
  return longestWord;
}


export { longestWordInString };

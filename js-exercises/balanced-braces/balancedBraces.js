
function balancedBraces(inputString) {
  const openingBraces = { '(': ')', '{': '}', '[': ']' };
  const closingBraces = { ')': true, '}': true, ']': true };
  const bracesArray = [];
  for (let i = 0; i <= inputString.length; i += 1) {
    const braceInInput = inputString[i];
    if (openingBraces[braceInInput]) {
      bracesArray.push(braceInInput);
    } else if (closingBraces[braceInInput]) {
      if (openingBraces[bracesArray.pop()] !== braceInInput) {
        return false;
      }
    }
  }
  return bracesArray.length === 0;
}
// time complexity = O(n)
// space complexity (auxillary) = O(n)
export {
  balancedBraces,
};

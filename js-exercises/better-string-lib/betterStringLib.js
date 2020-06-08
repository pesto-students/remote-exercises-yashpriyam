const isEqual = (str1, str2) => !str1.localeCompare(str2);

const regexSymbolWithCombiningMarks = /(\P{Mark})(\p{Mark}+)/gu;
const regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
const reverse = (inputString) => {
  const stringWithoutCombiningMarks = inputString
    .replace(regexSymbolWithCombiningMarks, (_, $1, $2) => reverse($2) + $1)
    .replace(regexSurrogatePair, '$2$1');
  const result = [];
  let index = stringWithoutCombiningMarks.length;
  while (index--) {
    result.push(stringWithoutCombiningMarks.charAt(index));
  }
  return result.join('');
};

export {
  isEqual,
  reverse,
};

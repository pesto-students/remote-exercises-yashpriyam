const countingAnagrams = str => {
  const anaCount = {};
  let validAnaCount = 0;
  str
    .split(' ')
    .map(el => el.split('').sort())
    .filter(el => el.length > 1)
    .map(el => el.join(''))
    .map(el => anaCount[el] = ++anaCount[el] || 1);
  Object.keys(anaCount)
    .filter(el => { if (anaCount[el] > 1) return validAnaCount += 1; });
  return validAnaCount;
};

export { countingAnagrams };

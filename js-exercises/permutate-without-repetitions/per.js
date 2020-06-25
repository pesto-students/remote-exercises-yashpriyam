/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */

const result = [];

const permutations = (argArray, arr) => {
  if (!argArray.length) result.push(arr);

  for (let i = 0; i < argArray.length; i += 1) {
    const pivotNum = argArray.splice(i, 1)[0];
    permutations(argArray, arr.concat(pivotNum));
    argArray.splice(i, 0, pivotNum);
  }
};
function permutateWithoutRepetitions(inputArray) {
  permutations(inputArray, []);
  return result;
}

export { permutateWithoutRepetitions };

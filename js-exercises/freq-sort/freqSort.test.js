import { frequencySort } from './freqSort';

describe('testing frequency sort', () => {
  test('getting only single copy of elements occuring multiple times in array', () => {
    expect(frequencySort(["a", "b", "b", "b", "b", "c", "c", "c", "c", "x", "x", "l", "p"]))
    .toStrictEqual(["b", "c", "x", "a", "l", "p"]);
  })
  test('sorting numbers in strings', () => {
    expect(frequencySort(["1", "3", "3", "3", "4", "10", "9", "9", "0", "0", "7", "7", "7"]))
    .toStrictEqual(["3", "7", "0", "9", "1", "4", "10"]);
  })
  test('getting array of uniques elements sorted based on frequency', () => {
    expect(frequencySort(["a", "z", "z", "z", "b", "b", "z"]))
    .toStrictEqual([ 'z', 'b', 'a' ]);
  })
});
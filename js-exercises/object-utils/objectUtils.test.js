import { map, filter, invert, merge, all, some } from './objectUtils';


describe('should give correct result', () => {
  test('should map all the key value pairs in input object', () => {
      expect(map({'YAsh': 2, 'priyam': 5})).toStrictEqual({'YASH': 20, 'PRIYAM': 50});
  });
  test('should filter all the key value pairs on the basis of a specific condition for a key', () => {
    const filterCallBack = (inputArray) => inputArray[0] === 'names';
    expect(filter({'YAsh': 2, 'names': 5}, filterCallBack)).toStrictEqual({'names': 5});
  });
  test('should invert the key-value pairs to value-key pairs', () => {
    expect(invert({'YAsh': 2, 'names': 5})).toStrictEqual({2: "YAsh", 5: "names"});
  });
  test('should merge multiple objects into one single large object', () => {
    expect(merge([{'YAsh': 2}, {'names': 5},{'a': 2},{'we': 23}])).toStrictEqual({'YAsh': 2, 'names': 5, 'a': 2, 'we': 23});
  });
  test('should return true if every value in the array is below a given value, else false', () => {
    expect(all([34,98,76,24,29,0,899,456,898,999,1000])).toBe(true);
    expect(all([34,98,76,24,29,0,899,456,8908,999,1000])).toBe(false);
  });
  test('should return true if some/any value in the array is below a given value, else false', () => {
    expect(some([675,900,879,879,876,656,545,990])).toBe(false);
    expect(some([67,900,89,879,876,656,545,90])).toBe(true);
  });
});
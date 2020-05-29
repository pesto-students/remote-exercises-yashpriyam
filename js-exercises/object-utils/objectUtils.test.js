import { map, filter, invert, merge, all, some } from './objectUtils';


describe('should give correct result', () => {
  test('should map all the key value pairs in input object', () => {
      expect(map({'YAsh': 2, 'priyam': 5})).toBe({YASH: 20, PRIYAM: 50});
  });
  test('should map all the key value pairs in input object', () => {
    expect(filter({'YAsh': 2, 'names': 5}, filterCallBack)).toBe({names: 5});
  });
  test('should map all the key value pairs in input object', () => {
    expect(invert({'YAsh': 2, 'names': 5})).toBe({2: "YAsh", 5: "names"});
  });
  test('should map all the key value pairs in input object', () => {
    expect(merge([{'YAsh': 2}, {'names': 5},{'a': 2},{'we': 23}])).toBe({YAsh: 2, names: 5, a: 2, we: 23});
  });
  test('should map all the key value pairs in input object', () => {
    expect(all([34,98,76,24,29,0,899,456,898,999,1000])).toBe(true);
    expect(all([34,98,76,24,29,0,899,456,8908,999,1000])).toBe(false);
  });
  test('should map all the key value pairs in input object', () => {
    expect(some([675,900,879,879,876,656,545,990])).toBe(false);
    expect(some([67,900,89,879,876,656,545,90])).toBe(true);
  });
});
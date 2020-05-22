import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  // write your own test cases
  test('should return the longest word', () => {
    expect(longestWordInString("just testing input text")).toBe('testing');
  });
  test('should indicate if all the words are of same length', () => {
    expect(longestWordInString('just test text')).toBe('All the words in the sentence are of same length')
  })
});

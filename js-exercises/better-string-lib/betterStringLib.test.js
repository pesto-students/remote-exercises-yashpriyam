import { isEqual, reverse } from './betterStringLib';

describe('testing string reverse function', () => {
  test('Combining remarks', () => {
    expect(reverse('man\u0303ana')).toBe('anan\u0303am');
  });
  test('Multiple Combining remarks', () => {
    expect(reverse('foo\u0303\u035C\u035D\u035Ebar')).toBe('rabo\u0303\u035C\u035D\u035Eof');
  });
  test('No Combining remarks', () => {
    expect(reverse('ab')).toBe('ba');
  });
  test('centre symbol', () => {
    expect(reverse('foo 𝌆 bar')).toBe('rab 𝌆 oof');
  });
  test('tilde symbol', () => {
    expect(reverse('mañana mañana')).toBe('anañam anañam');
  });
});

describe('testing isEqual function', () => {
  test('checking empty string', () => {
    expect(isEqual('', '')).toBe(true);
  })
  test('checking simple strings', () => {
    expect(isEqual('testing', 'resting')).toBe(false);
  })
  test('checking strings with combining marks', () => {
    expect(isEqual('mañana', 'mañana')).toBe(true);
  })
})
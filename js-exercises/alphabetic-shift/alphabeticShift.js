const alphabeticShift = input => input
  .split('')
  .map(el => el === 'z' || el === 'Z'
    ? String.fromCharCode(el.charCodeAt() - 25)
    : String.fromCharCode(el.charCodeAt() + 1))
  .join('');

export { alphabeticShift };

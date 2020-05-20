import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should call a function', () => {
    let count = 0;
    const foo = () => {count += 1; return 'true String'};
    expect(flipArgs()).toBe('true String');
    expect(count).toBe(1);
  });
});

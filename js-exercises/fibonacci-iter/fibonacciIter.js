const fibonacciIter = {
  valueArr: [0, 1],
  i: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    const value = this.valueArr[this.i] + this.valueArr[this.i - 1];
    this.i += 1;
    this.valueArr.push(value);
    return { value, done: false };
  },
};

export { fibonacciIter };

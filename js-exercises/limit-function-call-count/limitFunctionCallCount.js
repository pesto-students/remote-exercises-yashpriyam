let cbInvokedCount = 0;
const cb = () => true;

const limitFunctionCallCount = () => {
  function innerFunction(cbCallLimit) {
    if (cbInvokedCount <= cbCallLimit) {
      cb();
      cbInvokedCount += 1;
    }
  }
  return innerFunction;
};

export {
  limitFunctionCallCount,
};

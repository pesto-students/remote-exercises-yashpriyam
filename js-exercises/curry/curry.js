function curry(mainFunction) {
  return function curried(...args) {
    if (args.length >= mainFunction.length) {
      return mainFunction(...args);
    }
    return function (nextArg) {
      return curried(...[...args, nextArg]);
    };
  };
}

export {
  curry,
};

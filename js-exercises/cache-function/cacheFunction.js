const passedArgumentsList = [];
const cachedResultsList = [];
const cb = (x) => x * x;

function cacheFunction() {
  return function returnedByCache(inputArguments) {
    const indexOfInput = passedArgumentsList.findIndex(elem => elem === inputArguments);
    if (indexOfInput !== -1) {
      return cachedResultsList[indexOfInput];
    }
    const cbReturnValue = cb(inputArguments);
    cachedResultsList.push(cbReturnValue);
    passedArgumentsList.push(inputArguments);
    return cbReturnValue;
  };
}


export {
  cacheFunction,
};

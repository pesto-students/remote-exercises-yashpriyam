const myForEach = (inputArray, callBackFunction, thisArg) => {
  if (thisArg) {
    callBackFunction.bind(thisArg);
  }
  if (myForEach.length > 3 || myForEach.length === 0) {
    throw new Error('Unexpected number of arguments: expected atleast 1, atmost 3');
  }
  if (typeof callBackFunction !== 'function') {
    throw new TypeError(`Expected a function, got ${typeof callBackFunction}`);
  }
  if (callBackFunction.length > 3) {
    throw new Error(`Expected atmost 3 arguments, recieved ${callBackFunction.length}`);
  }
  function isIterable(obj) {
    if (obj !== null) {
      return typeof obj[Symbol.iterator] === 'function';
    }
    return false;
  }
  if (!isIterable(inputArray)) {
    throw new Error('Non-iterable value passed, expected iterable');
  }
  let count = 0;
  const inputArrayCopy = Array.isArray(inputArray) ? inputArray : Array.from(inputArray);
  for (const elem of inputArrayCopy) {
    callBackFunction(elem, count += 1, inputArrayCopy);
  }
};

const myMap = (inputArray, callBackFunction, thisArg) => {
  let count = 0;
  const mappingResult = [];
  if (thisArg) {
    callBackFunction.bind(thisArg);
  }
  const inputArrayCopy = Array.isArray(inputArray) ? inputArray : Array.from(inputArray);
  for (const elem of inputArrayCopy) {
    mappingResult.push(callBackFunction(elem, count += 1, inputArrayCopy));
  }
  return mappingResult;
};

const myFilter = (inputArray, callBackFunction, thisArg) => {
  let count = 0;
  const filteredResult = [];
  if (thisArg) {
    callBackFunction.bind(thisArg);
  }
  const inputArrayCopy = Array.isArray(inputArray) ? inputArray : Array.from(inputArray);
  for (const elem of inputArrayCopy) {
    count += 1;
    if (callBackFunction(elem, count, inputArrayCopy)) {
      filteredResult.push(elem);
    }
  }
  return filteredResult;
};

const myReduce = (inputArray, callBackFunction, initialValue, thisArg) => {
  if (thisArg) {
    callBackFunction.bind(thisArg);
  }
  const inputArrayCopy = Array.isArray(inputArray) ? inputArray : Array.from(inputArray);
  let init;
  if (initialValue) {
    init = initialValue;
    for (let i = 0; i <= inputArrayCopy.length - 1; i += 1) {
      callBackFunction(init, inputArrayCopy[i], i, inputArrayCopy);
      init = callBackFunction(init, inputArrayCopy[i], i, inputArrayCopy);
    }
  } else {
    init = inputArrayCopy[0];
    for (let i = 0; i <= inputArrayCopy.length - 2; i += 1) {
      callBackFunction(init, inputArrayCopy[i + 1], i, inputArrayCopy);
      init = callBackFunction(init, inputArrayCopy[i + 1], i, inputArrayCopy);
    }
  }
  return init;
};

export {
  myForEach,
  myMap,
  myFilter,
  myReduce,
};

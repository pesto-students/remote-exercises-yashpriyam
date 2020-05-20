const func = (recievedArg) => recievedArg;

function flipArgs(...input) {
  const inputArray = Array.from(...input);
  const reversedArgumnets = inputArray.reverse();
  func(reversedArgumnets);
}

export {
  flipArgs,
};

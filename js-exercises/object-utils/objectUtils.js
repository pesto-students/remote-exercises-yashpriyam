// your implementation
const mapCallBack = (inputArray) => [inputArray[0].toUpperCase(), inputArray[1] * 10];
const map = object => {
  const finalArray = [];
  for (const a of Object.entries(object)) {
    finalArray.push(mapCallBack(a));
  }
  return Object.fromEntries(finalArray);
};

const filterCallBack = (inputArray) => inputArray[0] === 'names';
const filter = object => {
  let requiredObject;
  for (const a of Object.entries(object)) {
    if (filterCallBack(a)) {
      requiredObject = Object.fromEntries([a]);
      break;
    }
  }
  return requiredObject;
};

const invert = object => {
  const finalArray = [];
  for (const a of Object.entries(object)) {
    finalArray.push(a.reverse());
  }
  return Object.fromEntries(finalArray);
};


const merge = input => {
  const oneBigObject = {};
  for (const a of input) {
    Object.assign(oneBigObject, a);
  }
  return oneBigObject;
};

const all = inputArray => inputArray.every(el => el <= 1000);

const some = inputArray => inputArray.some(el => el <= 500);

// console.log(map({'YAsh': 2, 'priyam': 5}));
// console.log(filter({'YAsh': 2, 'names': 5}, filterCallBack));
// console.log(invert({'YAsh': 2, 'names': 5}));
// console.log(merge([{'YAsh': 2}, {'names': 5},{'a': 2},{'we': 23}]));
// console.log(all([34,98,76,24,29,0,899,456,898,999,1000]));
// console.log(some([67,900,89,879,876,656,545,90]));

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};

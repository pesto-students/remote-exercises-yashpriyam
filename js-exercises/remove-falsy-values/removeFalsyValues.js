
function removeFalsyValues(array) {
  const falsyValues = array.filter(value => !value);
  const falsyValuesStringified = falsyValues.map(val => JSON.stringify(val));
  const arrayStringified = array.map(val => JSON.stringify(val));
  for (const a of falsyValuesStringified) {
    array.splice(arrayStringified.indexOf(a), 1);
    arrayStringified.splice(arrayStringified.indexOf(a), 1);
  }
  return array;
}

export {
  removeFalsyValues,
};

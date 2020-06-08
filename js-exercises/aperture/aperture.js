function aperture(size, arr) {
  if (size > arr.length) return [];
  const tupleList = [];
  let i = 0;
  do {
    tupleList.push(arr.slice(i, size + i));
    i += 1;
  } while (i < arr.length - (size - 1));
  return tupleList;
}

export { aperture };

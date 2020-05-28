function minima(...args) {
  const sortedArray = args[1].sort((a, b) => a - b);
  return sortedArray.slice(0, args[0]);
}

export { minima };

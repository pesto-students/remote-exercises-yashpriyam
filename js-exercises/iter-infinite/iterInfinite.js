function* count(start, step) {
  const jump = step || 1;
  for (let i = start; i <= Infinity; i += jump) {
    yield i;
  }
}

function* cycle(iterable, times) {
  let i = 0;
  let loopCount = 0;
  do {
    yield iterable[i];
    i += 1;
    if (i === iterable.length) {
      i = 0;
      loopCount += 1;
    }
  } while (i < iterable.length && loopCount !== times);
}

function* repeat(value, times) {
  let i = 0;
  do {
    yield value;
    i += 1;
  } while (i !== times);
}

export {
  count,
  cycle,
  repeat,
};

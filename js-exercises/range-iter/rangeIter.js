function rangeIter(lb, ub) {
  if (typeof lb !== 'number' || typeof ub !== 'number') throw new TypeError();
  if (lb < ub) {
    const rangeArray = [];
    let val = lb;
    do {
      rangeArray.push(val);
      val += 1;
    } while (val <= ub);
    return rangeArray;
  }
  if (lb > ub) return [];
  if (lb === ub) return [lb];
}

export { rangeIter };

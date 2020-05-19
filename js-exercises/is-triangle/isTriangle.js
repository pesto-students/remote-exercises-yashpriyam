function isTriangle(p, b, h) {
  switch (true) {
    case (p + b) > h && (p + h) > b && (h + b) > p:
      return true;
    default:
      return false;
  }
}

export {
  isTriangle,
};

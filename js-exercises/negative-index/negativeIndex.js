function negativeIndex(input) {
  if (!Array.isArray(input)) throw new TypeError();
  return new Proxy(input, {
    get(target, property) {
      if (typeof property !== 'string') return Reflect.get(target, property);
      const index = Number(property);
      if (index < 0) {
        const actualIndex = index + target.length;
        return target[actualIndex];
      }
      return target[property];
    },
    set(target, key, value) {
      const index = Number(key);
      if (index < 0) {
        const actualIndex = index + target.length;
        return Reflect.set(target, actualIndex, value);
      }
      return Reflect.set(target, key, value);
    },
  });
}

export { negativeIndex };

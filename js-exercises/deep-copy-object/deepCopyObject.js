const deepCopyObject = (objToCopy, copyDescriptor) => {
  if (typeof objToCopy !== 'object' || objToCopy === null || objToCopy === undefined) {
    return objToCopy;
  }
  const copiedObject = Object.create(Object.getPrototypeOf(objToCopy));
  for (const key in objToCopy) {
    const value = objToCopy[key];
    if (copyDescriptor) {
      const descriptor = Object.getOwnPropertyDescriptor(objToCopy, key);
      Object.defineProperty(copiedObject, key, descriptor);
    }
    copiedObject[key] = deepCopyObject(value);
  }
  return copiedObject;
};

export { deepCopyObject };

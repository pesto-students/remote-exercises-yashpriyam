
const allPromises = (arrayOfPromises) => {
  const resolvedValuesOfPromises = [];
  return new Promise(resolve => {
    for (const promise of arrayOfPromises) {
      setTimeout(() => {
        const prom = Promise.resolve(promise);
        prom
          .then((value) => resolvedValuesOfPromises.push(value),
            (error) => resolvedValuesOfPromises.push(error))
          .catch(error => resolvedValuesOfPromises.push(error));
      }, 0, promise);
    }
    resolve(resolvedValuesOfPromises);
  });
};

export { allPromises };

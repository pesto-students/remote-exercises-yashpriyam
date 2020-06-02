const allSettled = (arrayOfPromises) => {
  const resolvedValuesOfPromises = [];
  return new Promise(resolve => {
    for (const promise of arrayOfPromises) {
      setTimeout(() => {
        const prom = Promise.resolve(promise);
        prom
          .then((value) => resolvedValuesOfPromises.push({ status: 'fulfilled', value }),
            (error) => resolvedValuesOfPromises.push({ status: 'rejected', reason: error }))
          .catch(error => resolvedValuesOfPromises.push({ status: 'rejected', reason: error }));
      }, 0, promise);
    }
    resolve(resolvedValuesOfPromises);
  });
};

export { allSettled };

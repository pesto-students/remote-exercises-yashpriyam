const animalSort = animals => {
  const animalsCopy = animals;
  for (let j = 0; j <= animalsCopy.length - 2; j += 1) {
    for (let i = 0; i <= animalsCopy.length - 2; i += 1) {
      if (animalsCopy[i].numberOfLegs > animalsCopy[i + 1].numberOfLegs) {
        const transferable = animalsCopy[i];
        animalsCopy[i] = animalsCopy[i + 1];
        animalsCopy[i + 1] = transferable;
      } else if (animalsCopy[i].numberOfLegs === animalsCopy[i + 1].numberOfLegs) {
        if (animalsCopy[i].name > animalsCopy[i + 1].name) {
          const transferable = animalsCopy[i];
          animalsCopy[i] = animalsCopy[i + 1];
          animalsCopy[i + 1] = transferable;
        }
      }
    }
  }
  return animalsCopy;
};

// time complexity = O(n^2) quadratic
// space complexity (auxillary) = O(1) constant
export { animalSort };

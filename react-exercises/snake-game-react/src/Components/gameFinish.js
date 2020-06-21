const finish = (speedState, gameState) => {
  speedState(null);
  gameState(true);
};

export default finish;
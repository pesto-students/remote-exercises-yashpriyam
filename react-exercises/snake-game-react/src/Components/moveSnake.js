const DIRECTIONS = {
  38: [0, -1],
  39: [1, 0],
  40: [0, 1],
  37: [-1, 0],
};

const moveSnake = ({ keyCode }, setDirection) =>
keyCode >= 37 && keyCode <= 40 && setDirection(DIRECTIONS[keyCode]);


export default moveSnake;
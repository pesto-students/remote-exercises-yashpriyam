import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./Components/custom-hook.jsx";
import { SCALE, newFood } from './Components/newFood'
import moveSnake from './Components/moveSnake';
import finish from './Components/gameFinish';
import EndGame from './Components/endGame.jsx';
import Score from './Components/score.jsx';
import Canvas from './Components/canvas.jsx';
import './App.css'


const SPEED = 100;
const initialFoodLocation = [Math.round(Math.random()*15), Math.round(Math.random()*15)];
let gameScore = 0;
const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState([[7, 3], [8, 3], [9, 3]]);
  const [food, setNewFood] = useState(initialFoodLocation);
  const [direction, setDirection] = useState([-1, 0]);
  const [gameOver, setGameOver] = useState(false);


  const [speed, setSpeed] = useState(null);
  useInterval(() => crawling(), speed);


  const begin = () => {
    setSnake([[7, 3], [8, 3], [9, 3]]);
    setNewFood([Math.round(Math.random()*15), Math.round(Math.random()*15)]);
    setDirection([0, 1]);
    setSpeed(SPEED);
    setGameOver(false);
    gameScore = 0;
  };


  const isHit = (piece, snk = snake) => {
    switch(true) {
      case piece[0] * SCALE >= 460:
      case piece[0] < 0:
      case piece[1] * SCALE >= 460:
      case piece[1] < 0:
      case snk.some(el => el.every((val, i) => val === piece[i])):
        return true;
      default:
        return false;
    }
  };

  const foodIsGrabbed = newSnake => {
    if (newSnake[0].every((el, i) => el === food[i])) {
      let nextFood = newFood(food);
      gameScore += 1;
      while (isHit(nextFood, newSnake)) {
        nextFood = newFood(food);
      }
      setNewFood(nextFood);
      return true;
    }
    return false;
  };

  const crawling = () => {
    let snakeArrays = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeArrays[0][0] + direction[0], snakeArrays[0][1] + direction[1]];
    snakeArrays = [newSnakeHead, ...snakeArrays];
    if (isHit(newSnakeHead)) finish(setSpeed, setGameOver);
    if (!foodIsGrabbed(snakeArrays)) snakeArrays.pop();
    setSnake(snakeArrays);
  };

  
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    snake.forEach(([x, y], i) => {
      if (i === 0) {
        ctx.fillStyle = "red"
        ctx.fillRect(x, y, 1, 1)
      } else if (i === 1 || i === 2) {
        ctx.fillStyle = "white"
        ctx.fillRect(x, y, 1, 1)
      } else {
        ctx.fillStyle = "black"
        ctx.fillRect(x, y, 1, 1)
      }
    });
    ctx.beginPath();
    ctx.arc(food[0], food[1], 1/2, 0, 2 * Math.PI);
    ctx.fillStyle = 'black'
    ctx.fill();
  }, [snake, food, gameOver]);

  
  return (
    <>
    <h1>Snake Game</h1>
    <div className='main' role="button" tabIndex="0" onKeyDown={e => moveSnake(e, setDirection)}>
      <Canvas canvasRef={canvasRef}/>
      <Score gameScore={gameScore}/>
      {gameOver && <EndGame/>}
      <button className='start-button' onClick={begin}>Start Game</button>
    </div>
    </>
  );
};

export default App;

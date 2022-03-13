import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

// the while loop will run untill the food (object with coordinates to append it in the grid) is placed in a position that is not occupied bu the snake body
const getRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

let food = getRandomFoodPosition();

export function update() {
  if (onSnake(food)) {
    expandSnake(1);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}
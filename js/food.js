import {onSnake, expandSnake} from './snake.js'

let food = { x: 3, y: 6 };

export const update = () => {
    if (onSnake(food)) {
        expandSnake(1);
        food = { x: 4, y: 6 };
    };
};


export const draw = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}
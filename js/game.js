import { update as updateSnake, draw as drawSnake } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";

const gameBoard = document.getElementById('game-board');

const speedInput = document.getElementById('speed-input');
let speed = parseInt(speedInput.value);

const speedUp = document.getElementById('speed-up');
const speedDown = document.getElementById('speed-down');

let lastRenderTime = 0;
let gameOver = false;

// speed selector buttons
speedUp.addEventListener('click', () => {
    speed += 1;
    speedInput.value = speed;
})

speedDown.addEventListener('click', () => {
    if (speed > 1) {
        speed -= 1;
        speedInput.value = speed;
    }
})

const main = (currentTime) => {
    // game clock
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < 1 / speed) {
        return;
    };
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    updateSnake();
    updateFood();
}

const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
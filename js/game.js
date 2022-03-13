import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById('game-board');
const gameOverMenu = document.getElementById('game-over');

const speedInput = document.getElementById('speed-input');
let speed = parseInt(speedInput.value);

const speedUp = document.getElementById('speed-up');
const speedDown = document.getElementById('speed-down');
const restart = document.getElementById('restart-btn');

let lastRenderTime = 0;
let gameOver = false;

// speed selector buttons
speedUp.addEventListener('click', () => {
    speed += 1;
    speedInput.value = speed;
})

//restart button
restart.addEventListener('click', () => {
    window.location.reload();
})

speedDown.addEventListener('click', () => {
    if (speed > 1) {
        speed -= 1;
        speedInput.value = speed;
    }
})

const main = (currentTime) => {
    // game clock
    if (gameOver){
        gameOverMenu.style.display = 'flex';
        return;
    }

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

const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

const update = () => {
    updateSnake();
    updateFood();
    checkDeath();
}

const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
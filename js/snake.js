import { getInputDirecton } from "./input.js";

const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export const update = () => {
    const inputDirection = getInputDirecton();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export const draw = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = segment.y;
        snakeSegment.style.gridColumnStart = segment.x;
        if ((snakeBody.indexOf(segment) % 2) === 0) {
            snakeSegment.classList.add('snake-even');
        }
        else {
            snakeSegment.classList.add('snake-odd');
        }
        gameBoard.appendChild(snakeSegment);
    });
}

export const expandSnake = (rate) => {
    newSegments += rate;
}

export const onSnake = (position) => {
    return snakeBody.some((segment) => {
        return equalPositions(segment, position);
    });
}

const equalPositions = (pos1, pos2) => {
    return (pos1.x === pos2.x && pos1.y === pos2.y);
}
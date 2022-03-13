import { getInputDirecton } from "./input.js";

// the snake is an array of objects with coordinates used to append them in a grid
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export const update = () => {
    addSegments();
    const inputDirection = getInputDirecton();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        // shifting the entire array to follow the head, then clearing the old one
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    // moving the head
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export const draw = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = segment.y;
        snakeSegment.style.gridColumnStart = segment.x;
        // multi color snake!
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

// by default, not ignoring the head. but when calculating snake intersection, the head must be ignored as the head is always intersecting with itself
export const onSnake = (position, {ignoreHead = false} = {}) => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0){
            return false;
        }
        return equalPositions(segment, position);
    });
}

export const getSnakeHead = () => {
    return snakeBody[0];
}

// ignoring the head, if the head intersect any segment other than itself, the game is over
export const snakeIntersection = () => {
    return onSnake(snakeBody[0], {ignoreHead : true});
}

const equalPositions = (pos1, pos2) => {
    return (pos1.x === pos2.x && pos1.y === pos2.y);
}

// when a food is eaten the newSegments variable is raised by one, and a new segment is pushed and then the newSegments is set back to 0
const addSegments = () => {
    if (newSegments !== 0) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
}
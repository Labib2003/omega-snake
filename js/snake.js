const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export const update = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i - 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += 1;
    snakeBody[0].y += 0;
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
let inputDirection = {x:0, y:0};
let lastInputDirection = {x:0, y:0};

// controls
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0){
                break;
            };
            inputDirection = {x:0, y:-1};
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0){
                break;
            };
            inputDirection = {x:0, y:1};
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0){
                break;
            };
            inputDirection = {x:-1, y:0};
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0){
                break;
            };
            inputDirection = {x:1, y:0};
            break;
    };
})

//touch controls
document.getElementById('up').addEventListener('click', () => {
    if (lastInputDirection.y !== 0){
        return;
    }
    else {
        inputDirection = {x:0, y:-1};
        return;
    }
});
document.getElementById('down').addEventListener('click', () => {
    if (lastInputDirection.y !== 0){
        return;
    }
    else {
        inputDirection = {x:0, y:1};
        return;
    }
});
document.getElementById('left').addEventListener('click', () => {
    if (lastInputDirection.x !== 0){
        return;
    }
    else {
        inputDirection = {x:-1, y:0};
        return;
    }
});
document.getElementById('right').addEventListener('click', () => {
    if (lastInputDirection.x !== 0){
        return;
    }
    else {
        inputDirection = {x:1, y:0};
        return;
    }
});

// the last input is saved to stop the user from reversing the snake
export const getInputDirecton = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
}
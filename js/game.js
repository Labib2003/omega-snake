const gameBoard = document.getElementById('game-board');
const speedInput = document.getElementById('speed-input');
let speed = parseInt(speedInput.value);
const speedUp = document.getElementById('speed-up');
const speedDown = document.getElementById('speed-down');

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


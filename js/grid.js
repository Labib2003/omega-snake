// getting random coordinates
export const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}

// in css grid, position 0 and 1 looks indentical but are differrent, if the snake head is outside these parameters, this function will return true
export const outsideGrid = (position) => {
    return (
        position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21
    );
}
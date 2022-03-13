export const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}
import { Color } from "cesium"

const getRandomSmallFloat = () => {
    return (Math.round(Math.random() * 10)) / 10
}

export const getRandomCesiumColor = () => {
    return new Color(getRandomSmallFloat(), getRandomSmallFloat(), getRandomSmallFloat())
}

export const getRandomHexColor = () => {
    // First part gives us a random number 0 and 16, trimmed of with the double NOT bitwise operator (acts like Math.floor)
    // Then, we convert it to a string, using base 16. If num < 0 we get a number, otherwise a letter from a to f
    return "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
}
import { Color } from "cesium"

const getRandomSmallFloat = () => {
    return (Math.round(Math.random() * 10)) / 10
}

export const getRandomCesiumColor = () => {
    return new Color(getRandomSmallFloat(), getRandomSmallFloat(), getRandomSmallFloat())
}
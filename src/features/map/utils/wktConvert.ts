import { Cartesian3, Cartographic, Math } from "cesium";

// This will be useful for sending user points to the server
export const cartesian3ToWKT = (cartesian: Cartesian3) => {
    const carto = Cartographic.fromCartesian(cartesian);

    // This is Math from Cesium, not native JS Math
    const lon = Math.toDegrees(carto.longitude);
    const lat = Math.toDegrees(carto.latitude);

    return `POINT (${lon} ${lat})`;
};

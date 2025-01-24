import { WKT } from "ol/format";
import { Feature } from "ol";

export const featureToWKT = (feature: Feature) => {
    const format = new WKT();
    return format.writeFeature(feature);
};

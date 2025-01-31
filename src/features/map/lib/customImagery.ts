import { UrlTemplateImageryProvider } from "cesium";

export const CustomImagery = new UrlTemplateImageryProvider({
    url: import.meta.env.VITE_API_URL + "/tiles/{z}/{x}/{y}/",
});

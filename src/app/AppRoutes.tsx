import App from "@/App";
import { Routes, Route } from "react-router";
import MapPage from "./pages/MapPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<App />} />
            <Route path="/map" element={<MapPage />} />
        </Routes>
    );
};

export default AppRoutes
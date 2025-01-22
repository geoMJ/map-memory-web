import App from "@/App";
import InteractiveMap from "@/features/map/components/InteractiveMap";
import { Routes, Route } from "react-router";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<App />} />
            <Route index element={<InteractiveMap />} />
        </Routes>
    );
};

export default AppRoutes
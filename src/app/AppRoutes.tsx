import App from "@/App";
import { Routes, Route } from "react-router";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<App />} />
        </Routes>
    );
};

export default AppRoutes
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./app/AppRoutes";
import "./lib/i18n";

import "./index.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>
);

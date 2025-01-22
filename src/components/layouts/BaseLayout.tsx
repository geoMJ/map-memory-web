import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Simple layout for pages except the map one
// TODO think of map page layout
const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};

export default BaseLayout;

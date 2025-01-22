import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {}

const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default BaseLayout;

import { NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 MapMemory. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <NavLink
                    className="text-xs hover:underline underline-offset-4"
                    to="#"
                >
                    Terms of Service
                </NavLink>
                <NavLink
                    className="text-xs hover:underline underline-offset-4"
                    to="#"
                >
                    Privacy
                </NavLink>
            </nav>
        </footer>
    );
};

export default Footer;

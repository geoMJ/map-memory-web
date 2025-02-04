import { MenuIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import ScrollToHashElement from "../shared/ScrolToHashElementlElement";
import ThemeSwitch from "../ui/ThemeSwitch";

const Navbar = ({ desktop }: { desktop?: boolean }) => {
    const { t } = useTranslation();
    const linkStyles = "text-sm font-medium hover:underline underline-offset";
    return (
        <nav className={desktop ? "max-md:hidden" : ""}>
            <ScrollToHashElement behavior="smooth" />
            <ul className="flex max-md:flex-col gap-4 sm:gap-6 items-center">
                <li>
                    <NavLink className={linkStyles} to="#features">
                        {t("navigation.features")}
                    </NavLink>
                </li>
                <li>
                    <NavLink className={linkStyles} to="#how-it-works">
                        {t("navigation.how_it_works")}
                    </NavLink>
                </li>
                <li>
                    <NavLink className={linkStyles} to="#faq">
                        {t("navigation.faq")}
                    </NavLink>
                </li>
                <li>
                    <Button asChild>
                        <NavLink className={linkStyles} to="/map">
                            {t("navigation.map")}
                        </NavLink>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header className="py-6 border-b">
            <div className="container flex justify-between items-center">
                <NavLink to="/" className="font-bold text-2xl">
                    MapMemory
                </NavLink>
                <div className="flex flex-row-reverse md:flex-row items-center">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="menu">
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="text-center pt-12 rounded-b">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <Navbar />
                        </SheetContent>
                    </Sheet>
                </div>
                <Navbar desktop />
                <ThemeSwitch /> 
                </div>
            </div>
        </header>
    );
};

export default Header;

import { MapPin, MenuIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Navbar = ({ desktop }: { desktop?: boolean }) => {
    const { t } = useTranslation();
    const linkStyles = "text-sm font-medium hover:underline underline-offset";
    return (
        <nav className={desktop ? "max-md:hidden" : ""}>
            <ul className="flex max-md:flex-col gap-4 sm:gap-6">
                <li>
                    <HashLink smooth className={linkStyles} to="#features">
                        {t("navigation.features")}
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth className={linkStyles} to="#how-it-works">
                        {t("navigation.how_it_works")}
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth className={linkStyles} to="#faq">
                        {t("navigation.faq")}
                    </HashLink>
                </li>
                <li>
                    <NavLink className={linkStyles} to="/map">
                        {t("navigation.map")}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex justify-between items-center">
            <HashLink smooth className="flex items-center justify-center" to="/">
                <MapPin className="h-6 w-6 text-green-600" />
                <span className="ml-2 text-2xl font-bold text-gray-800">MapMemory</span>
            </HashLink>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="menu">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="text-center pt-12 rounded-b">
                        <Navbar />
                    </SheetContent>
                </Sheet>
            </div>
            <Navbar desktop />
        </header>
    );
};

export default Header;

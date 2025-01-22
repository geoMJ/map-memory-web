import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
    const { t } = useTranslation();
    const linkStyles = "text-sm font-medium hover:underline underline-offset";

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <NavHashLink
                smooth
                className="flex items-center justify-center"
                to="/"
            >
                <MapPin className="h-6 w-6 text-green-600" />
                <span className="ml-2 text-2xl font-bold text-gray-800">
                    MapMemory
                </span>
            </NavHashLink>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <NavHashLink smooth className={linkStyles} to="#features">
                    {t("navigation.features")}
                </NavHashLink>
                <NavHashLink smooth className={linkStyles} to="#how-it-works">
                    {t("navigation.how_it_works")}
                </NavHashLink>
                <NavHashLink smooth className={linkStyles} to="#faq">
                    {t("navigation.faq")}
                </NavHashLink>
                <NavLink className={linkStyles} to="/map">
                    {t("navigation.map")}
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;

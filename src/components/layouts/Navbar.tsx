import { MapPin } from "lucide-react";
import { NavLink } from "react-router";
import {useTranslation} from 'react-i18next'

const Navbar = () => {
    const {t} = useTranslation();
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <NavLink className="flex items-center justify-center" to="/">
                <MapPin className="h-6 w-6 text-green-600" />
                <span className="ml-2 text-2xl font-bold text-gray-800">
                    MapMemory
                </span>
            </NavLink>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <NavLink
                    className="text-sm font-medium hover:underline underline-offset-4"
                    to="#features"
                >
                    {t('navigation.features')}
                </NavLink>
                <NavLink
                    className="text-sm font-medium hover:underline underline-offset-4"
                    to="#how-it-works"
                >
                    {t('navigation.how')}
                </NavLink>
                <NavLink
                    className="text-sm font-medium hover:underline underline-offset-4"
                    to="#faq"
                >
                    {t('navigation.faq')}
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;

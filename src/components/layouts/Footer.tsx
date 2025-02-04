import GitHubLogo from "@/assets/icons/github-mark.svg?react";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Footer = () => {
    const { t } = useTranslation();
    const footerTranslation = t("footer", { returnObjects: true }) as {
        made_with: string;
        love: string;
        and_a_keyboard: string;
        graphics_from: string;
        and: string;
    };

    return (
        <footer className="flex flex-col w-full gap-10 p-10 border-t bg-card text-sm text-center text-card-foreground [&>*]:justify-center">
            <p>
                {footerTranslation.made_with}{" "}
                {
                    <Heart
                        size={16}
                        className="inline text-pink-700 fill-pink-700"
                        aria-label={footerTranslation.love}
                    />
                }{" "}
                {footerTranslation.and_a_keyboard}
            </p>
            <div className="flex gap-2">
                <Link to="https://github.com/geoMJ/map-memory-web" target="_blank" className="hover:opacity-50 transition-opacity">
                    <GitHubLogo className="w-6 h-6 fill-card-foreground" />
                </Link>
            </div>
            <aside className="[&_a]:text-indigo-500 [&_a:hover]:text-indigo-200 [&_a]:transition-colors">
                <p className="">
                    © 2024 MapMemory. {footerTranslation.graphics_from}{" "}
                    <Link to="https://www.freepik.com/" target="_blank">Freepik</Link> {footerTranslation.and}{" "}
                    <Link to="https://lottiefiles.com/" target="_blank">LottieFiles</Link>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;

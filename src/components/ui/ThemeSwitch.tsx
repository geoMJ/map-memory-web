import { Moon, SunDim } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

const ThemeSwitch = () => {
    const [light, setLight] = useState(document.body.classList.contains("light"));
    const handleThemeChange = () => {
        setLight((prev) => !prev);
        document.body.classList.toggle("light");
    };
    return (
        <Button
            title="theme"
            variant="ghost"
            className="hover:bg-transparent hover:text-foreground/80 [&_svg]:size-6"
            onClick={handleThemeChange}
        >
            {light ? <Moon /> : <SunDim />}
        </Button>
    );
};

export default ThemeSwitch;

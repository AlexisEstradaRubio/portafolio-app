import { useTheme } from "../context/ThemeContext";
import {SunIcon} from "../images/SunIcon.tsx"
import {MoonIcon} from "../images/MoonIcon.tsx";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink"
        >
            <SunIcon isDark={isDark} />
            <MoonIcon isDark={isDark} />
        </button>
    );
};

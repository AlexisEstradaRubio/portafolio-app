import { useTheme } from "../context/useTheme.ts";
import { SunIcon } from "../images/SunIcon.tsx";
import { MoonIcon } from "../images/MoonIcon.tsx";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            title={isDark ? "Tema claro" : "Tema oscuro"}
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-ink-soft"
        >
            <SunIcon isDark={isDark} />
            <MoonIcon isDark={isDark} />
        </button>
    );
};

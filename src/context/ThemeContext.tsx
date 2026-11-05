import { useEffect, useState } from "react";
import { ThemeContext } from "./theme";
import type { Theme } from "./theme";
import type { ReactNode } from "react";

const STORAGE_KEY = "theme";

// The inline script in index.html already applied the theme before first paint;
// read it back so React starts in sync and the icons don't animate on load.
const getInitialTheme = (): Theme => {
    const applied = document.documentElement.getAttribute("data-theme");
    if (applied === "light" || applied === "dark") return applied;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch {
                // Storage can be unavailable (private mode); the theme still applies for this visit.
            }
            return next;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

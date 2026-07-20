import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// function getInitialTheme(): Theme {
//     // Respects the OS-level preference as the starting point.
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     return prefersDark ? "dark" : "light";
// }

const getInitialTheme = () => {
    // Respects the OS-level preference as the starting point.
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}

export const ThemeProvider = ({children}: {children: ReactNode}) => {

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    // Whenever theme changes, reflect it on <html data-theme="...">
    // so our CSS variables (defined in index.css) pick it up.
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

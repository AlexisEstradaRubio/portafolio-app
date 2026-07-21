/**
 * @param param0
 * @param param0.isDark
 * @returns {React.JSX.Element}
 * @constructor
 */
interface SunIconProps {
    isDark?: boolean;
}

export const SunIcon = ({isDark}: SunIconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className={`absolute h-[18px] w-[18px] transition-all duration-300 ${isDark ? "scale-50 -rotate-45 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
    )
}

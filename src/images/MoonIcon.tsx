/**
 * @param param0
 * @param param0.isDark
 * @returns {React.JSX.Element}
 * @constructor
 */
interface MoonIconProps {
    isDark: boolean;
}

export const MoonIcon = ({isDark}: MoonIconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className={`absolute h-[18px] w-[18px] transition-all duration-300 ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 rotate-45 opacity-0"}`}
        >
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
        </svg>
    )
}

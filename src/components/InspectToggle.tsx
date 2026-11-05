import { useInspect } from "../context/useInspect";

interface InspectToggleProps {
    /** "icon" for the navigation bar, "text" for inline calls to action. */
    variant?: "icon" | "text";
    label?: string;
}

const BracketsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[18px] w-[18px]">
        <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />
        <path d="M13.5 4 10.5 20" />
    </svg>
);

export const InspectToggle = ({ variant = "icon", label = "Ver cómo está construido" }: InspectToggleProps) => {
    const { isInspecting, toggleInspect } = useInspect();

    if (variant === "text") {
        return (
            <button
                type="button"
                onClick={toggleInspect}
                aria-pressed={isInspecting}
                className={`inline-flex min-h-11 items-center gap-2 rounded-md border-[1.5px] border-dashed px-3.5 text-sm font-semibold transition-colors ${
                    isInspecting ? "border-inspect-line bg-inspect text-[#1a1f22]" : "border-inspect-line text-ink hover:bg-inspect/25"
                }`}
            >
                <BracketsIcon />
                {isInspecting ? "Ocultar vista de componentes" : label}
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={toggleInspect}
            aria-pressed={isInspecting}
            aria-label="Vista de componentes"
            title="Vista de componentes"
            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors ${
                isInspecting ? "border-inspect-line bg-inspect text-[#1a1f22]" : "border-line text-ink hover:border-ink-soft"
            }`}
        >
            <BracketsIcon />
        </button>
    );
};

import { useEffect, useId, useRef, useState } from "react";
import { cvFiles } from "../data/profile";

interface CvDownloadProps {
    /** Visual style of the trigger: outlined on light sections, inverted on the contact block. */
    tone?: "default" | "inverse";
}

const cvHref = (fileName: string) => `${import.meta.env.BASE_URL}cv/${fileName}`;

/** "Descargar CV" disclosure with one link per language. */
export const CvDownload = ({ tone = "default" }: CvDownloadProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuId = useId();
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;
        const onPointerDown = (event: PointerEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
        };
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                triggerRef.current?.focus();
            }
        };
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    const triggerTone =
        tone === "inverse"
            ? "border-on-accent/50 text-on-accent hover:border-on-accent"
            : "border-ink/25 text-ink hover:border-ink";

    return (
        <div ref={containerRef} className="relative">
            <button
                ref={triggerRef}
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setIsOpen((prev) => !prev)}
                className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border-2 px-5 font-semibold whitespace-nowrap transition-colors sm:w-auto ${triggerTone}`}
            >
                Descargar CV
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true" className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            <ul
                id={menuId}
                hidden={!isOpen}
                className="absolute left-0 z-30 mt-2 w-full min-w-48 overflow-hidden rounded-md border border-line bg-surface py-1 text-ink shadow-[0_10px_30px_rgba(26,31,34,0.16)] sm:w-auto"
            >
                {cvFiles.map((file) => (
                    <li key={file.lang}>
                        <a
                            href={cvHref(file.fileName)}
                            hrefLang={file.lang}
                            type="application/pdf"
                            download
                            onClick={() => setIsOpen(false)}
                            className="flex min-h-11 items-center justify-between gap-6 px-4 text-sm font-medium hover:bg-accent-wash"
                        >
                            {file.label}
                            <span className="text-xs text-ink-soft">PDF</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

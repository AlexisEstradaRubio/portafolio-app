import { useEffect, useState } from "react";
import { useInspect } from "../context/useInspect";

/** Explains the component view while it is active and offers a way out. */
export const InspectBanner = () => {
    const { isInspecting, stopInspect } = useInspect();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInspecting) return;
        // Count after the outlines are painted.
        const frame = requestAnimationFrame(() => {
            setCount(document.querySelectorAll("[data-inspect]").length);
        });
        return () => cancelAnimationFrame(frame);
    }, [isInspecting]);

    if (!isInspecting) return null;

    return (
        <div
            role="status"
            className="fixed inset-x-3 bottom-3 z-40 mx-auto flex max-w-xl flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-lg border border-inspect-line bg-surface px-4 py-3 text-sm shadow-[0_8px_30px_rgba(26,31,34,0.18)]"
        >
            <p className="text-ink">
                <span className="font-semibold">Vista de componentes.</span>{" "}
                <span className="text-ink-soft">
                    Cada contorno es uno de los {count} componentes de React de esta página, con sus props.
                </span>
            </p>
            <button
                type="button"
                onClick={stopInspect}
                className="min-h-10 rounded-md bg-ink px-3 text-sm font-semibold text-bg"
            >
                Cerrar
            </button>
        </div>
    );
};

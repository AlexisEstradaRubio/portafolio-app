import { useCallback, useEffect, useMemo, useState } from "react";
import { InspectContext } from "./inspect";
import type { ReactNode } from "react";

export const InspectProvider = ({ children }: { children: ReactNode }) => {
    const [isInspecting, setIsInspecting] = useState(false);

    const toggleInspect = useCallback(() => setIsInspecting((prev) => !prev), []);
    const stopInspect = useCallback(() => setIsInspecting(false), []);

    // Escape leaves the component view from anywhere on the page.
    useEffect(() => {
        if (!isInspecting) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsInspecting(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isInspecting]);

    const value = useMemo(
        () => ({ isInspecting, toggleInspect, stopInspect }),
        [isInspecting, toggleInspect, stopInspect],
    );

    return <InspectContext.Provider value={value}>{children}</InspectContext.Provider>;
};

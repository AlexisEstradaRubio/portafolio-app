import { createContext } from "react";

export interface InspectContextValue {
    /** True while the "component view" overlay is active. */
    isInspecting: boolean;
    toggleInspect: () => void;
    stopInspect: () => void;
}

export const InspectContext = createContext<InspectContextValue | undefined>(undefined);

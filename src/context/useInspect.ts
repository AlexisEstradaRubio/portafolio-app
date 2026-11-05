import { useContext } from "react";
import { InspectContext } from "./inspect";
import type { InspectContextValue } from "./inspect";

export function useInspect(): InspectContextValue {
    const context = useContext(InspectContext);
    if (context === undefined) {
        throw new Error("useInspect must be used within an InspectProvider");
    }
    return context;
}

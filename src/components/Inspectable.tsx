import { createElement } from "react";
import type { ReactNode } from "react";
import { useInspect } from "../context/useInspect";

type InspectableTag = "div" | "section" | "header" | "article" | "li" | "ul" | "footer" | "nav" | "aside";

/**
 * Where the name tag sits in the component view:
 * - "outside": above the element (default).
 * - "below": under the element, for elements pinned to the top of the viewport.
 * - "inside": inside the top-right corner, for elements that fill the screen width.
 */
type TagPlacement = "outside" | "below" | "inside";

const tagPosition: Record<TagPlacement, string> = {
    outside: "-top-[1.85rem] -left-1.5",
    below: "top-[calc(100%+0.4rem)] left-3",
    inside: "top-2 right-2",
};

interface InspectableProps {
    /** React component name shown in the component view, e.g. "CaseStudy". */
    name: string;
    /** Optional props summary, e.g. 'company="Creditas"'. */
    detail?: string;
    as?: InspectableTag;
    tagPlacement?: TagPlacement;
    className?: string;
    id?: string;
    hidden?: boolean;
    "aria-labelledby"?: string;
    children: ReactNode;
}

/**
 * Renders its element normally. While the component view is active, it also
 * draws a dashed outline and a tag with the component name, so visitors can
 * see how the page is composed.
 */
export const Inspectable = ({
    name,
    detail,
    as = "div",
    tagPlacement = "outside",
    className = "",
    children,
    ...rest
}: InspectableProps) => {
    const { isInspecting } = useInspect();
    // The tag is positioned against this element, unless it already sets its own position.
    const positioned = /\b(sticky|fixed|absolute)\b/.test(className) ? className : `relative ${className}`;

    return createElement(
        as,
        {
            ...rest,
            className: tagPlacement === "outside" ? positioned : `${positioned} inspect-inset`,
            "data-inspect": isInspecting ? name : undefined,
        },
        isInspecting && (
            <span
                aria-hidden="true"
                className={`pointer-events-none absolute z-20 max-w-[calc(100%+0.75rem)] truncate rounded-sm bg-inspect px-1.5 py-0.5 font-mono text-[0.6875rem] leading-tight font-medium text-[#1a1f22] ${tagPosition[tagPlacement]}`}
            >
                &lt;{name}
                {detail ? ` ${detail}` : ""} /&gt;
            </span>
        ),
        children,
    );
};

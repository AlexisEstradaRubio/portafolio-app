import type { ReactNode } from "react";
import { Inspectable } from "./Inspectable";

interface SectionProps {
    id: string;
    title: string;
    /** One sentence under the title that says what the section contains. */
    description?: string;
    /** Component name shown in the component view. */
    inspectName: string;
    children: ReactNode;
}

/**
 * Shared section layout: title in a left rail (sticky on wide screens),
 * content on the right. Keeps spacing identical across sections.
 */
export const Section = ({ id, title, description, inspectName, children }: SectionProps) => {
    const headingId = `${id}-title`;

    return (
        <Inspectable
            as="section"
            name={inspectName}
            id={id}
            aria-labelledby={headingId}
            className="mx-auto grid max-w-6xl gap-x-16 gap-y-8 border-t border-line px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[15rem_1fr]"
        >
            <div className="lg:sticky lg:top-24 lg:self-start">
                <h2 id={headingId} className="text-2xl font-bold tracking-tight text-balance">
                    {title}
                </h2>
                {description && <p className="mt-3 max-w-md text-sm text-ink-soft">{description}</p>}
            </div>
            <div className="min-w-0">{children}</div>
        </Inspectable>
    );
};

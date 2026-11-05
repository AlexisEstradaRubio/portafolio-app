interface TechListProps {
    items: string[];
    /** Accessible name for the list, e.g. "Tecnologías". */
    label: string;
}

/** Compact inline list of technologies or tags. */
export const TechList = ({ items, label }: TechListProps) => (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
        {items.map((item) => (
            <li key={item} className="rounded-sm bg-accent-wash px-2 py-0.5 text-xs font-medium text-accent-strong">
                {item}
            </li>
        ))}
    </ul>
);

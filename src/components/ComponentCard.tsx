import { StatusPill } from "./StatusPill";
import type { Experience } from "../types/content";

interface ComponentCardProps {
  experience: Experience;
}

export const ComponentCard = ({ experience }: ComponentCardProps) => {
  return (
    <div className="bg-bg-alt border border-line rounded-xl overflow-hidden mb-5">
      {/* Header: looks like a component's file signature */}
      <div className="flex justify-between items-center gap-3 flex-wrap px-4 py-3.5 border-b border-line bg-bg">
        <div className="font-mono text-sm font-medium">
          <span className="text-ink-faint">&lt;</span>
          <span className="text-accent-ink">{experience.company.replace(/[^a-zA-Z0-9]/g, "")}</span>
          <span className="text-ink-faint"> /&gt;</span>
        </div>
        <StatusPill status={experience.status} />
      </div>

      {/* Body: role, period, description, and highlights as "props" */}
      <div className="p-4">
        <div className="font-mono text-[11.5px] text-ink-faint mb-3">
          {experience.role} · {experience.period} · {experience.location}
        </div>
        <p className="text-sm text-ink-soft mb-3.5">{experience.description}</p>
        <ul className="list-none p-0 m-0">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="text-sm text-ink-soft py-1.5 pl-4 relative">
              <span className="absolute left-0 text-accent font-bold">›</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
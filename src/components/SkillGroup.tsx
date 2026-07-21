import { SkillChip } from "./SkillChip";
import type { SkillGroup as SkillGroupType } from "../types/content";

interface SkillGroupProps {
  group: SkillGroupType;
}

export const SkillGroup = ({ group }: SkillGroupProps) => {
  return (
    <div>
      <h3 className="font-mono text-xs text-ink-faint mb-3">{group.title}</h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
};
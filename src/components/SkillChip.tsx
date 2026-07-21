interface SkillChipProps {
  label: string;
}

export const SkillChip = ({ label }: SkillChipProps) => {
  return (
    <span className="font-mono text-xs bg-bg-alt border border-line px-3 py-1.5 rounded-md text-ink-soft">
      {label}
    </span>
  );
};
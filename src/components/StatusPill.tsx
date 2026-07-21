interface StatusPillProps {
  status: "current" | "archived";
}

const statusConfig: Record<StatusPillProps["status"], { label: string; className: string }> = {
  current: {
    label: "en producción",
    className: "bg-accent-soft text-accent-ink",
  },
  archived: {
    label: "completado",
    className: "bg-line text-ink-faint",
  },
};

export const StatusPill = ({ status }: StatusPillProps) => {
  const { label, className } = statusConfig[status];

  return (
    <span className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full whitespace-nowrap ${className}`}>
      {label}
    </span>
  );
};
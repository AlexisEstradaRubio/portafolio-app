interface SkeletonProps {
  /** Skeleton width. Accepts any valid CSS value, such as '100%', '240px', etc. */
  width?: string;
  /** Skeleton height. */
  height?: string;
  /** Skeleton shape, depending on what is being loaded. */
  variant?: "text" | "card" | "circle";
  /** Additional Tailwind classes for custom spacing, margins, or other styling adjustments. */
  className?: string;
}

const variantStyles: Record<NonNullable<SkeletonProps["variant"]>, string> = {
  text: "rounded-md",
  card: "rounded-xl",
  circle: "rounded-full",
};

export const Skeleton = ({
  width = "100%",
  height = "1rem",
  variant = "text",
  className = "",
}: SkeletonProps) => {
  return (
    <div
      role="status"
      aria-label="Loading..."
      className={`animate-pulse bg-line ${variantStyles[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};

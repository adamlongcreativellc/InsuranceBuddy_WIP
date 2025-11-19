interface PatentBadgeProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function PatentBadge({ className = "", size = "medium" }: PatentBadgeProps) {
  const sizeClasses = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-3 py-1 text-sm",
    large: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold bg-primary-50 text-primary-600 border border-primary-200 ${sizeClasses[size]} ${className}`}
    >
      Patent Pending
    </span>
  );
}

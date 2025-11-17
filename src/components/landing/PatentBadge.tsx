import { Chip, SxProps, Theme } from "@mui/material";

interface PatentBadgeProps {
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
}

export default function PatentBadge({ size = "medium", sx }: PatentBadgeProps) {
  return (
    <Chip
      label="Patent Pending"
      size={size}
      sx={{
        bgcolor: "rgba(38, 136, 227, 0.1)",
        color: "primary.main",
        fontWeight: 600,
        fontSize: size === "small" ? "0.75rem" : "0.875rem",
        border: "1px solid",
        borderColor: "primary.light",
        "& .MuiChip-label": {
          px: 2,
        },
        ...sx,
      }}
    />
  );
}

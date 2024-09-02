import React from "react";
import { LucideIcon } from "lucide-react";

type IconButtonProps = {
  icon: LucideIcon;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  size = "medium",
  color = "currentColor",
  className = "",
}) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${className}`}
      style={{ color }}
    >
      <Icon className={sizeClasses[size]} />
    </button>
  );
};

export { IconButton };

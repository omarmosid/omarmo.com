import React from "react";

interface CalloutProps {
  variant: "info" | "success" | "error" | "warning";
  title: string;
  message: string;
}

const variantStyles: Record<CalloutProps["variant"], string> = {
  info: "bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:border-blue-400 dark:text-blue-300",
  success:
    "bg-green-100 border-green-500 text-green-700 dark:bg-green-900 dark:border-green-400 dark:text-green-300",
  error:
    "bg-red-100 border-red-500 text-red-700 dark:bg-red-900 dark:border-red-400 dark:text-red-300",
  warning:
    "bg-orange-100 border-orange-500 text-orange-700 dark:bg-orange-900 dark:border-orange-400 dark:text-orange-300",
};

const pulseCircleStyles: Record<CalloutProps["variant"], string> = {
  info: "bg-blue-500 dark:bg-blue-400",
  success: "bg-green-500 dark:bg-green-400",
  error: "bg-red-500 dark:bg-red-400",
  warning: "bg-orange-500 dark:bg-orange-400",
};

const Callout: React.FC<CalloutProps> = ({ variant, title, message }) => {
  return (
    <div
      className={`${variantStyles[variant]} p-4 border-l-4 font-sans relative shine`}
      role="alert"
    >
      <p className="font-bold m-0 text-inherit">{title}</p>
      <p className="m-0">{message}</p>
    </div>
  );
};

export { Callout };

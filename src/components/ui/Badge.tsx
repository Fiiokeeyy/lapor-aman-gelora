import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "warning" | "info" | "success" | "danger" | "neutral" | "orange";
  dot?: boolean;
}

export const Badge = ({
  className,
  variant = "neutral",
  dot = false,
  children,
  ...props
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-tight border select-none transition-colors";

  const variantStyles = {
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    info: "bg-sky-50 text-sky-800 border-sky-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    danger: "bg-rose-50 text-rose-800 border-rose-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    orange: "bg-orange-50 text-orange-800 border-orange-200",
  };

  const dotStyles = {
    warning: "bg-amber-500",
    info: "bg-sky-500",
    success: "bg-emerald-500",
    danger: "bg-rose-500",
    neutral: "bg-slate-500",
    orange: "bg-orange-500",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", dotStyles[variant])} />}
      <span>{children}</span>
    </span>
  );
};


import * as React from "react";
import cn from "../utils/cn";

export function Badge({ className, variant="default", ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default"|"secondary"|"outline" }) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border",
  };
  return <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", variants[variant], className)} {...props} />;
}

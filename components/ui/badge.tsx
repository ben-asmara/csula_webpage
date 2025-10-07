
import * as React from "react";
import cn from "../utils/cn";
export function Badge({ className, variant="default", ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default"|"secondary"|"outline" }) {
  const variants = { default: "bg-black text-white", secondary: "bg-gray-100 text-black", outline: "border border-gray-200"};
  return <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", variants[variant], className)} {...props} />;
}

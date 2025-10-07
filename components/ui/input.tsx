
import * as React from "react";
import cn from "../utils/cn";
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2", className)} {...props} />;
}

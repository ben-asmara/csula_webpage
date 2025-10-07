
import * as React from "react";
import cn from "../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"outline"|"secondary"; size?: "sm"|"md"|"lg" };
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant="default", size="md", ...props }, ref) {
  const variants = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border hover:bg-secondary",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  };
  const sizes = { sm: "px-3 py-1.5 text-sm rounded-md", md: "px-4 py-2 rounded-lg", lg: "px-5 py-3 text-base rounded-2xl" };
  return <button ref={ref} className={cn("inline-flex items-center justify-center font-medium transition", variants[variant], sizes[size], className)} {...props} />;
});
export default Button;

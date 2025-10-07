
import * as React from "react";
import cn from "../utils/cn";

type ButtonBaseProps = {
  variant?: "default"|"outline"|"secondary";
  size?: "sm"|"md"|"lg";
  asChild?: boolean;
};

type ButtonProps = (React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) & ButtonBaseProps;

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(function Button({ className, variant="default", size="md", asChild=false, ...props }, ref) {
  const variants = {
    default: "bg-black text-white hover:opacity-90",
    outline: "border border-gray-200 hover:bg-gray-50",
    secondary: "bg-gray-100 text-black hover:opacity-90",
  };
  const sizes = { sm: "px-3 py-1.5 text-sm rounded-md", md: "px-4 py-2 rounded-lg", lg: "px-5 py-3 text-base rounded-2xl" };
  const classes = cn("inline-flex items-center justify-center font-medium transition", variants[variant], sizes[size], className);
  if (asChild) {
    // @ts-expect-error anchor props allowed when asChild is true
    return <a ref={ref as any} className={classes} {...props} />;
  }
  return <button ref={ref as any} className={classes} {...props} />;
});
export default Button;

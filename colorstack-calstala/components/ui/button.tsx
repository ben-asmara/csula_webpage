import * as React from "react";
import cn from "../utils/cn";

type ButtonBaseProps = {
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  /** When true, render an <a> instead of <button> */
  asChild?: boolean;
  href?: string;
};

type ButtonProps =
  ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = React.forwardRef<any, ButtonProps>(function Button(
  { className, variant = "default", size = "md", asChild = false, href, ...props },
  ref
) {
  const variants = {
    default: "bg-black text-white hover:opacity-90",
    outline: "border border-gray-200 hover:bg-gray-50",
    secondary: "bg-gray-100 text-black hover:opacity-90",
  } as const;

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 rounded-lg",
    lg: "px-5 py-3 text-base rounded-2xl",
  } as const;

  const classes = cn(
    "inline-flex items-center justify-center font-medium transition",
    variants[variant],
    sizes[size],
    className
  );

  if (asChild) {
    // Render an anchor when you pass asChild (for link buttons)
    return <a ref={ref} href={href} className={classes} {...props} />;
  }
  return <button ref={ref} className={classes} {...props} />;
});

export default Button;

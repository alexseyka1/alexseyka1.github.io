import { cn } from "@utils/cn";
import Link from "next/link";
import React, { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "link";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  as?: "button" | "Link";
} & Omit<React.HTMLProps<HTMLButtonElement>, "size" | "onClick">;

/* ── Variant classes ── */
const variantClasses: Record<string, string> = {
  primary:
    "bg-primary-500 text-white shadow-xs border border-primary-500 hover:bg-primary-700",
  secondary:
    "bg-white text-gray-800 border border-gray-300 shadow-xs hover:bg-gray-50",
  link: "bg-transparent text-primary-500 p-0 h-auto shadow-none hover:text-primary-700",
};

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      children,
      onClick,
      type = "button",
      disabled,
      className,
      variant = "primary",
      as = "button",
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const As = as === "Link" ? Link : as;
    const resolved = variant;

    return (
      // @ts-ignore
      <As
        // @ts-ignore
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          // Base
          "px-6 py-2 relative inline-flex items-center justify-center rounded-lg font-semibold duration-200 cursor-pointer",
          // Variant
          variantClasses[resolved],
          // Disabled
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          className,
        )}
        type={type}
        {...props}
      >
        <span className="inline-flex items-center gap-1.5">
          {children != null && children !== "" && <span>{children}</span>}
        </span>
      </As>
    );
  },
);

Button.displayName = "Button";

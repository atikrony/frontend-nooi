"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "social" | "text" | "icon" | "cta-teal" | "cta-dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-lg transition-colors",
  social:
    "flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2.5 rounded-lg transition-colors",
  text:
    "text-teal-600 hover:text-teal-700 font-semibold bg-transparent border-none p-0 cursor-pointer",
  icon:
    "text-gray-400 hover:text-gray-600 transition-colors",
  "cta-teal":
    "inline-flex gap-0 bg-[#1B5E5E] hover:bg-[#154646] text-white font-semibold rounded-xl transition-colors cursor-pointer",
  "cta-dark":
    "flex items-center justify-between bg-[#1a3d2f] hover:bg-[#152e23] text-white rounded-lg py-3 px-5 text-sm font-semibold transition-colors",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

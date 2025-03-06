import React from "react";
import clsx from "clsx"; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger"; // Button styles
  size?: "sm" | "md" | "lg"; // Different sizes
  isLoading?: boolean; // Loading state
  fullWidth?: boolean; // Full width option
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  // Define button styles based on props
  const buttonClasses = clsx(
    "flex items-center justify-center rounded-lg font-semibold transition-all duration-200",
    {
      "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
      "bg-gray-600 text-white hover:bg-gray-700": variant === "secondary",
      "border border-gray-600 text-gray-700 hover:bg-gray-100": variant === "outline",
      "bg-red-600 text-white hover:bg-red-700": variant === "danger",
      "px-4 py-2 text-sm": size === "sm",
      "px-5 py-2.5 text-md": size === "md",
      "px-6 py-3 text-lg": size === "lg",
      "w-full": fullWidth,
      "opacity-50 cursor-not-allowed": isLoading,
    },
    className
  );

  return (
    <button className={buttonClasses} disabled={isLoading} {...props}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;

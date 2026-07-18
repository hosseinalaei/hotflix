import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const variants = {
  primary:
    "bg-amber-700 text-white hover:bg-amber-600 shadow-md shadow-red-950/50",
  secondary:
    "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-600",
  ghost:
    "bg-transparent text-zinc-200 hover:bg-red-600/15 hover:text-red-400 border border-zinc-600 hover:border-red-500/40",
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex w-full items-center justify-center
        rounded-lg px-5 py-2.5
        text-sm font-medium tracking-wide
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900
        disabled:pointer-events-none disabled:opacity-50
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

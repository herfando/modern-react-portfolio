// src/components/ui/Button/index.tsx
import React from "react";

// Type data untuk properti Button
interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void; 
}

const Button = ({ children, className, label, onClick }: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}  
      className={`bg-[#FF623E] w-[197px] h-[44px] rounded-3xl font-bold text-white ${className}`}
    >
      {children} {label}
    </button>
  );
};

export default Button;

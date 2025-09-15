// src/components/ui/Button/index.tsx
import React from "react";

// Tentukan tipe untuk props. Tambahkan 'label'.
interface ButtonProps {
  label: string; // Tambahkan ini
  className?: string; // Properti untuk kelas CSS (opsional)
}

const Button = ({ children, className, label }: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={`bg-[#FF623E] w-[197px] h-[44px] rounded-2xl font-bold text-white ${className}`}>
      {children} {label}
    </button>
  );
};

export default Button;
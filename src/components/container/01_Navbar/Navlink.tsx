import React from "react";


type NavLinkProps = {
  id: string;
  label: string;
  onClick: (id: string) => void;
  className?: string;
  isActive: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ id, label, onClick, className, isActive }) => {
  // Tentukan kelas CSS berdasarkan props 'isActive'
  const activeClass = isActive ? 'text-red-500 font-bold' : '';

  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
      // Gabungkan kelas aktif dengan kelas yang sudah ada
      className={`hover:text-red-500 transition-colors cursor-pointer ${className} ${activeClass}`}
    >
      {label}
    </a>
  );
};

export default NavLink;
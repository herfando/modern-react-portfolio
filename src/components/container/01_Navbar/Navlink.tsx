import React from "react";

// The `type` definition.
type NavLinkProps = {
  id: string;
  label: string;
  onClick: (id: string) => void;
  className?: string;
  isActive: boolean;
};

// This component is designed to be highly reusable for creating individual navigation links.
const NavLink: React.FC<NavLinkProps> = ({ id, label, onClick, className, isActive }) => {
  // We use a simple ternary operator for conditional rendering of CSS classes based on the 'isActive' prop.
  const activeClass = isActive ? 'text-red-500 font-bold' : '';

  return (
    <a
      href={`#${id}`}
      // The `e.preventDefault()` stops the default browser behavior, ensuring the smooth scroll is handled by our `onClick` function.
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
      // We combine static, passed-in, and dynamic CSS classes to create a flexible and complete style.
      className={`hover:text-red-500 transition-colors cursor-pointer ${className} ${activeClass}`}
    >
      {label}
    </a>
  );
};

export default NavLink;
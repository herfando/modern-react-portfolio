import React from "react";

// Type definition for the Button component's props. This improves code reliability
// by ensuring that the component receives the expected data types.
interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void; // A function to be executed when the button is clicked. It's optional.
}

// The Button component is a reusable UI element. It accepts props to customize its appearance and behavior.
const Button = ({ children, className, label, onClick }: React.PropsWithChildren<ButtonProps>) => {
  return (
    // The `<button>` element is used for semantic correctness.
    <button
      onClick={onClick}  
      // The `className` prop allows for external styling from parent components.
      // Template literals combine default styles with any custom styles passed in.
      className={`bg-[#FF623E] w-[197px] h-[44px] rounded-3xl font-bold text-white ${className}`}
    >
      {/* The `children` prop renders any content passed between the opening and closing tags of the component.
      This makes the button highly flexible. */}
      {children} {label}
    </button>
  );
};

export default Button;
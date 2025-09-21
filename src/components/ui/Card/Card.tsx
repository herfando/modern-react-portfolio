import React from 'react';

// This is a reusable `Card` component for UI.
// The `interface` defines the expected props, ensuring type safety.
interface CardProps {
  // `children` allows the component to wrap and render any content passed to it.
  // This makes it a flexible container.
  children: React.ReactNode; 
  // `className` is an optional prop that lets a parent component pass custom styling.
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    // The outermost `div` creates a border effect using a gradient background.
    // The `className` prop is integrated here to allow for custom styling.
    <div
      className={`p-[1px] bg-gradient-to-br from-[#ff6c37] to-[#dedcdc] rounded-[18px] relative ${className}`}
    >
      {/* This inner `div` provides the main content area with a solid background color. */}
      <div className="h-full bg-[#fafafa] dark:bg-[#0A0D12] rounded-2xl relative">
        {/* The absolute-positioned image is a decorative element, like a quote icon. */}
        {/* It's positioned relative to the parent container. */}
        <div className="absolute top-[-30px] left-10 w-[46px] max-[393px]:top-[-30px] max-[393px]:left-5">
          <img src="./Vector.png" alt="Quote Icon" />
        </div>
        {/* The `children` prop renders whatever content is placed inside the <Card> component. */}
        {children}
      </div>
    </div>
  );
};

export default Card;
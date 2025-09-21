// src/ui/FaqItem/FaqItem.tsx
import React from 'react';

const FaqItem: React.FC = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Question */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={onClick}
      >
        <h3 className="leading-9 text-2xl font-bold">{question}</h3>
        <div className="basis-[24px]">
          {isOpen ? (
            <span className="text-2xl font-bold">−</span>
          ) : (
            <span className="text-2xl font-bold">+</span>
          )}
        </div>
      </div>
      {/* Answer */}
      {isOpen && (
        <p className="leading-[34px] text-xl font-medium text-[#717680]">
          {answer}
        </p>
      )}
      <div className="h-[1px] bg-[#dfdfdf]"></div>
    </div>
  );
};

export default FaqItem;
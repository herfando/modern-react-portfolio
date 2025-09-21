import React from "react";

// This interface defines the props for the `FaqItem` component, ensuring type safety.
// `question` and `answer` are the text content, `isOpen` controls visibility, and `onClick` handles the toggle action.
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    // The main container for each FAQ item, with a bottom border for visual separation.
    <div className="border-b border-gray-300 pb-4">
      <button
        // The `onClick` handler triggers the function passed from the parent component to toggle the visibility of the answer.
        onClick={onClick}
        // This button acts as the toggle for the FAQ item.
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-semibold text-lg">{question}</span>
        {/* Conditional rendering (`isOpen ? "−" : "+"`) changes the icon based on whether the answer is visible. */}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {/* Conditional rendering (`isOpen && ...`) ensures the answer is only displayed when the `isOpen` prop is true. */}
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FaqItem;
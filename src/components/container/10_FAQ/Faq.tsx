import React, { useState } from "react";
import FaqItem from "../../ui/FaqItem/FaqItem";

// FAQ data is separated from the component to prevent it from being recreated on every render.
// This is a good practice for performance and maintainability.
const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult — we’ll assess your goals and recommend the right approach.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let’s talk about your needs to get a tailored estimate.",
  },
  {
    question: "How long does it take?",
    answer:
      "Depends on scope — but we always prioritize quality and deadlines.",
  },
  {
    question: "Can I start with a small project first?",
    answer: "Absolutely. We often begin with MVPs or pilot projects.",
  },
];

const Faq: React.FC = () => {
  // `useState` manages the state of the open FAQ item. `null` means no item is open.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // This function toggles the open/closed state of an FAQ item.
  // It checks if the clicked item is already open; if so, it closes it by setting the state to `null`.
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // The `id` attribute makes this section a target for in-page navigation.
    <section
      id="FAQ"
      className="max-[393px]:py-10 max-[393px]:px-3.5 flex flex-col gap-12 py-20 px-[120px] bg-white dark:bg-black text-black dark:text-white w-full"
    >
      {/* Header */}
      <div className="flex justify-between max-[393px]:grid">
        <h2 className="basis-[331px] leading-14 text-[40px] font-bold">
          Need Help? Start Here.
        </h2>
        <p className="basis-[245px] leading-8 text-lg font-medium text-[#717680]">
          Everything you need to know — all in one place.
        </p>
      </div>

      {/* Top line */}
      <div className="h-[1px] bg-[#dfdfdf]"></div>

      {/* Main container */}
      {/* The layout uses flexbox and responsive classes to adjust from a horizontal layout (md:flex-row) on desktop
      to a vertical layout (flex-col) on mobile. */}
      <div className="flex gap-[73px] flex-col md:flex-row max-[393px]:gap-8">
        {/* Left: FAQ list */}
        <div className="flex flex-col gap-7 grow">
          {/* Mapping over the `faqData` array to dynamically render each FAQ item. */}
          {faqData.map((faq, index) => (
            // `FaqItem` is a reusable component, and its behavior is controlled by the props passed from this parent component.
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              // The `isOpen` prop is a boolean that determines the state of the `FaqItem`.
              isOpen={openIndex === index}
              // The `onClick` prop passes the `toggleFaq` function, allowing the child component to update the parent's state.
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>

        {/* Right: Consultation */}
        <div className="flex flex-col gap-6 basis-[329px] bg-[#cc4e32] p-6 rounded-3xl">
          <div className="flex flex-col gap-1 text-white">
            <h3 className="leading-11 text-4xl font-bold">
              Let’s talk it through
            </h3>
            <p className="leading-8 text-lg font-semibold">
              Book a free consultation with our team.
            </p>
          </div>
          <img src="./10_FAQ_consultation.png" alt="Consultation" />
          {/* This button handles smooth scrolling to the "Form" section using a DOM query,
          which is a common pattern for linking to sections on the same page. */}
          <button
            onClick={() =>
              document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer active:bg-blue-400 bg-black dark:bg-white dark:text-black p-2 leading-[30px] rounded-full text-white text-center font-bold"
          >
            Free consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
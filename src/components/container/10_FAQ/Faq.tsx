import React, { useState } from "react";
import FaqItem from "../../ui/FaqItem/FaqItem";

// Data FAQ dipisahkan agar tidak dibuat ulang setiap render
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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

      {/* Garis atas */}
      <div className="h-[1px] bg-[#dfdfdf]"></div>

      {/* Kontainer utama */}
      <div className="flex gap-[73px] flex-col md:flex-row max-[393px]:gap-8">
        {/* Kiri: Faq */}
        <div className="flex flex-col gap-7 grow">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>

        {/* Kanan: Konsultasi */}
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

import React, { useState } from "react";

// Centralized data for different industries. This makes the component easy to manage and scale.
const INDUSTRIES = [
  {
    id: "fintech",
    title: "Fintech",
    description: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    imageSrc: "./07_Industry_industry.png",
    imageAlt: "Industry Image",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    imageSrc: "./07_Industry_e-commerce.png",
    imageAlt: "E-Commerce Image",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    imageSrc: "./07_Industry_healthcare.png",
    imageAlt: "Healthcare Image",
  },
];

const Industry: React.FC = () => {
  // Using `useState` to manage which tab is currently active.
  // The initial state is set to the first industry's ID.
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);

  // This function updates the active tab state when a user clicks on an industry title.
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // `Array.find()` is used to get the data for the active industry, ensuring that the displayed
  // content always matches the selected tab.
  const activeIndustry = INDUSTRIES.find(industry => industry.id === activeTab);

  return (
    <section className="max-[393px]:py-10 max-[393px]:px-3.5 flex flex-col gap-16 py-20 px-[140px] bg-white dark:bg-black text-black dark:text-white w-full">
      {/* Title & Subtitle */}
      <div className="flex flex-col gap-[11px]">
        <h2 className="leading-14 text-[40px] max-[393px]:text-[33px] font-bold">
          Built for Your Industry
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680]">
          We’ve helped companies across industries launch smarter, faster, and more securely.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-[150px_1fr] gap-16 grid-cols-1 max-[393px]:gap-10">
        {/* Left Column: List of industries */}
        <div className="flex flex-col gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="industry-tab flex gap-2 cursor-pointer items-center"
              // The `onClick` handler calls `handleTabClick` to change the active tab state.
              onClick={() => handleTabClick(industry.id)}
            >
              <div
                // This ternary operator is a simple and effective way to conditionally apply CSS classes,
                // highlighting the active tab with a different color.
                className={`indicator w-[4px] h-[34px] rounded-[100px] ${
                  activeTab === industry.id ? "bg-[#ff623e]" : "bg-[#aaa]"
                }`}
              ></div>
              <h3 className="leading-[34px] text-xl font-bold">{industry.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Column: Description & Image */}
        <div className="flex flex-col gap-5 grow">
          {/* This conditional rendering (`activeIndustry && ...`) ensures content is only displayed
          if a matching industry is found, preventing errors. */}
          {activeIndustry && (
            <div
              id={activeIndustry.id}
              className="industry-card flex flex-col gap-5"
            >
              <p className="leading-8 text-lg font-medium max-[393px]:font-light">
                {activeIndustry.description}
              </p>
              <img
                className="rounded-3xl max-[393px]:h-[200px]"
                src={activeIndustry.imageSrc}
                alt={activeIndustry.imageAlt}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Industry;
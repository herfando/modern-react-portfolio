import React from "react";

// The `PORTFOLIOS` array centralizes all project data, making the component easy to maintain and scale.
// This is a great example of separating data from presentation logic.
const PORTFOLIOS = [
  {
    imageSrc: "./08_Portfolio_1.png",
    category: "Landing Page",
    title: "Portofolio 1",
  },
  {
    imageSrc: "./08_Portfolio_2.png",
    category: "Landing Page",
    title: "Portofolio 2",
  },
  {
    imageSrc: "./08_Portfolio_3.png",
    category: "Landing Page",
    title: "Portofolio 3",
  },
];

const Portfolio: React.FC = () => {
  return (
    // The `id` attribute is crucial for in-page navigation, allowing other components to link directly to this section.
    <section id="Projects" className="max-[393px]:py-10 max-[393px]:px-3.5 flex flex-col py-20 px-[140px] gap-16 bg-white dark:bg-black text-black dark:text-white w-full">
      {/* Title & Subtitle */}
      <div className="flex flex-col gap-[11px] text-center">
        <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-3xl max-[393px]:font-medium">
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680] max-[393px]:text-[16px]">
          Take a closer look at our recent work powering startups, enterprises, and everything in between.
        </p>
      </div>

      {/* Portfolio Content */}
      {/* This responsive grid layout changes from a single column on mobile to three columns on desktop,
      providing an optimized viewing experience on different devices. */}
      <div className="grid md:grid-cols-3 md:gap-5 grid-cols-1 gap-10">
        {/* The `map()` function iterates over the `PORTFOLIOS` array to dynamically generate each portfolio card.
        This is a fundamental React pattern for rendering lists. */}
        {PORTFOLIOS.map((portfolio, index) => (
          // The `key` prop is essential for React to efficiently track and update each item in the list.
          <div key={index} className="flex flex-col gap-3 cursor-pointer">
            <img src={portfolio.imageSrc} alt={portfolio.title} />
            <div className="flex flex-col">
              <h3 className="leading-[30px] text-base font-medium text-[#ff623e]">
                {portfolio.category}
              </h3>
              <p className="leading-[34px] text-xl font-bold">{portfolio.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
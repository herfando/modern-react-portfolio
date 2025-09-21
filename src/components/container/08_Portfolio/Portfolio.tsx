import React from "react";

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
    <section className="max-[393px]:py-10 max-[393px]:px-3.5 flex flex-col py-20 px-[140px] gap-16 bg-white dark:bg-black text-black dark:text-white w-full">
      {/* Judul & Subjudul */}
      <div className="flex flex-col gap-[11px] text-center">
        <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-3xl max-[393px]:font-medium">
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680] max-[393px]:text-[16px]">
          Take a closer look at our recent work powering startups, enterprises, and everything in between.
        </p>
      </div>

      {/* Portofolio Content */}
      <div className="grid md:grid-cols-3 md:gap-5 grid-cols-1 gap-10">
        {PORTFOLIOS.map((portfolio, index) => (
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
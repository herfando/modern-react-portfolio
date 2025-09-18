import React from "react";


const Portfolio = () => {
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
      <div className="flex gap-5 justify-center max-[393px]:flex-col max-[393px]:items-center max-[393px]:gap-10">
        {/* Portofolio 1 */}
        <div className="flex flex-col gap-3 cursor-pointer">
          <img src="./portfolio1.png" />
          <div className="flex flex-col">
            <h3 className="leading-[30px] text-base font-medium text-[#ff623e]">Landing Page</h3>
            <p className="leading-[34px] text-xl font-bold">Portofolio 1</p>
          </div>
        </div>
        {/* Portofolio 2 */}
        <div className="flex flex-col gap-3 cursor-pointer">
          <img src="./portfolio2.png" />
          <div className="flex flex-col">
            <h3 className="leading-[30px] text-base font-medium text-[#ff623e]">Landing Page</h3>
            <p className="leading-[34px] text-xl font-bold">Portofolio 2</p>
          </div>
        </div>
        {/* Portofolio 3 */}
        <div className="flex flex-col gap-3 cursor-pointer">
          <img src="./portfolio3.png" />
          <div className="flex flex-col">
            <h3 className="leading-[30px] text-base font-medium text-[#ff623e]">Landing Page</h3>
            <p className="leading-[34px] text-xl font-bold">Portofolio 3</p>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Portfolio;
import React from "react";
import Button from "../../ui/Button/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="Hero"
      className="h-[731px] bg-white dark:bg-black text-black dark:text-white 
                 grid grid-cols-1 md:grid-cols-2 md:h-[663px]
                 pt-24 md:pt-0" // Tambahkan padding atas untuk mengimbangi navbar
    >
      {/* Konten Hero: Article dan button */}
      <article
        className="p-4 w-full md:translate-x-10 translate-x-0
                   md:pl-15 grid content-center justify-center
                   gap-3 md:gap-5"
      >
        <hgroup>
          <h1 className="md:text-5xl text-3xl font-bold">Your Tech Partner for</h1>
          <h1 className="md:text-5xl text-3xl font-bold text-[#FF6C37]">Smarter Growth</h1>
        </hgroup>
        <p className="md:text-xl text-sm">We deliver tailored IT solutions to help you scale with speed and confidence.</p>
        <Button className="w-full md:w-[197px]">Let's Talk</Button>
      </article>

      {/* Gambar Hero (Desktop & Mobile) */}
      <div className="md:col-start-2 flex justify-center items-center">
        <img
          className="dark:hidden block w-full h-auto object-contain max-h-[663px] max-w-[747px]"
          src="./public/2.Image Hero light.png"
          alt="Smartphone in light mode"
        />
        <img
          className="hidden dark:block w-full h-auto object-contain max-h-[663px] max-w-[747px]"
          src="./public/3.Image Hero dark.png"
          alt="Smartphone in dark mode"
        />
      </div>
    </section>
  );
};

export default Hero;
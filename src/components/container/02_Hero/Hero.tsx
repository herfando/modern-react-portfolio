import React from "react";
import Button from "../../ui/Button/Button";
import DarkModeToggle from "../../ui/DarkModeToggle/DarkModeToggle";


const Hero = () => {
  return (
    <section className="h-[731px] bg-white dark:bg-black text-black dark:text-white grid grid-cols-1 md:grid-cols-2 md:h-[663px] translate-y-16 md:translate-y-0 py-10 md:py-0">
      {/* Article dan button */}
      <article className="p-4 w-full md:translate-x-10 translate-x-0 md:gap-5 gap-3  md:pl-15 grid  content-center justify-center">
        <h1 className="md:text-5xl text-3xl font-bold">Your Tech Partner for </h1>
        <h1 className="md:text-5xl text-3xl font-bold text-[#FF6C37]">Smarter Growth</h1>
        <h4 className="md:text-xl text-sm">We deliver tailored IT solutions to help you scale with speed and confidence.</h4>
        <Button className="w-full md:w-[197px]">Let's Talk</Button>    
      </article>
      {/* Image smartphone */}
      <img className="dark:hidden block w-full h-auto object-contain md:h-[663px] md:w-[747px]" src="./public/2.Image Hero light.png" alt="smarphonelightmode" />
      <img className="hidden dark:block w-full h-auto object-contain md:h-[663px] md:w-[747px]" src="./public/3.Image Hero dark.png" alt="smarphonelightmode" />
    </section>
  )
}

export default Hero;

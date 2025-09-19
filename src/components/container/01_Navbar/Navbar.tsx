import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Hamburger from "hamburger-react";
import DarkModeToggle from "../../ui/DarkModeToggle/DarkModeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white md:px-25 px-1 w-full h-21 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 translate-x-4 md:translate-0">
        <img className="md:scale-100 scale-80" src="./public/1.mylogo.png" alt="logo" />
        <span className="md:text-2xl text-l font-bold">Your Logo</span>
      </a>

      {/* Navigasi Utama Desktop */}
      <nav className="hidden md:flex justify-center gap-8 font-semibold">
        <a href="#About" onClick={(e) => { e.preventDefault(); scrollToSection("About"); }} className="hover:text-red-500 transition-colors">About</a>
        <a href="#Service" onClick={(e) => { e.preventDefault(); scrollToSection("Service"); }} className="hover:text-red-500 transition-colors">Service</a>
        <a href="#Projects" onClick={(e) => { e.preventDefault(); scrollToSection("Projects"); }} className="hover:text-red-500 transition-colors">Projects</a>
        <a href="#Testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("Testimonials"); }} className="hover:text-red-500 transition-colors">Testimonials</a>
        <a href="#FAQ" onClick={(e) => { e.preventDefault(); scrollToSection("FAQ"); }} className="hover:text-red-500 transition-colors">FAQ</a>
      </nav>
      
      {/* Kontainer untuk Tombol Contact & DarkMode */}
      <div className="hidden md:flex items-center gap-4">
        <DarkModeToggle />
        <Button label="Let's Talk" onClick={() => scrollToSection("Form")} />
      </div>
      
      {/* Kontainer untuk DarkModeToggle dan Hamburger di mobile */}
      <div className="flex items-center gap-2 md:hidden">
        <DarkModeToggle />
        <div className="z-50 pr-4">
          <Hamburger toggled={isOpen} toggle={() => setIsOpen(!isOpen)} size={24} />
        </div>
      </div>

      {/* Menu Mobile */}
      <nav className={`gap-5 fixed top-20 left-0 w-full h-[1000px] bg-white dark:bg-black text-black dark:text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden flex flex-col font-semibold z-[-2]`}>
        <div className="translate-x-6 flex flex-col space-y-3 w-full gap-5 my-3">
          <a href="#About" onClick={(e) => { e.preventDefault(); scrollToSection("About"); }}>About</a>
          <a href="#Service" onClick={(e) => { e.preventDefault(); scrollToSection("Service"); }}>Service</a>
          <a href="#Projects" onClick={(e) => { e.preventDefault(); scrollToSection("Projects"); }}>Projects</a>
          <a href="#Testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("Testimonials"); }}>Testimonials</a>
          <a href="#FAQ" onClick={(e) => { e.preventDefault(); scrollToSection("FAQ"); }}>FAQ</a>
        </div>
        <div className="flex w-full justify-center">
          <Button className="w-full mx-6 md:mx-0 md:w-[197px] h-[44px]" onClick={() => { scrollToSection("Form"); }}>Let's Talk</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
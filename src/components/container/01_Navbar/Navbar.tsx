import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import DarkModeToggle from "../../ui/DarkModeToggle/DarkModeToggle";
import useToggle from "../../hooks/useToggle";
import NavLink from "./Navlink";
import Button from "../../ui/Button/Button";

// Menggunakan data navigasi yang terpusat untuk kemudahan pengelolaan
const NAV_ITEMS = [
  { id: "Hero", label: "About" },
  { id: "Services", label: "Service" },
  { id: "Projects", label: "Projects" },
  { id: "Testimonials", label: "Testimonials" },
  { id: "FAQ", label: "FAQ" },
];

const Navbar: React.FC = () => {
  const { isOpen, toggle, close } = useToggle(false);
  // State untuk melacak link yang sedang aktif
  const [activeLink, setActiveLink] = useState('Hero');

  // Efek untuk memperbarui link aktif saat pengguna menggulir halaman
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 100) {
          currentSection = item.id;
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      // Perbarui state link aktif saat tombol diklik
      setActiveLink(sectionId);
      close();
    }
  };

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white md:px-25 px-1 w-full h-21 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo */}
      <a href="#" onClick={() => scrollToSection('Hero')} className="flex items-center gap-2 translate-x-4 md:translate-0">
        <img className="md:scale-100 scale-80" src="./1.mylogo.png" alt="logo" />
        <span className="md:text-2xl text-l font-bold">Your Logo</span>
      </a>

      {/* Navigasi Desktop */}
      <nav className="hidden md:flex justify-center gap-8 font-semibold">
        {NAV_ITEMS.map((link) => (
          <NavLink
            key={link.id}
            id={link.id}
            label={link.label}
            onClick={scrollToSection}
            // Kirim state 'activeLink' ke NavLink
            isActive={activeLink === link.id}
          />
        ))}
      </nav>

      {/* Tombol Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <DarkModeToggle />
        <Button
          label="Let's Talk"
          className="cursor-pointer"
          onClick={() => scrollToSection("Form")}
        />
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-2 md:hidden">
        <DarkModeToggle />
        <div className="z-50 pr-4">
          <Hamburger toggled={isOpen} toggle={toggle} size={24} />
        </div>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`gap-5 fixed top-20 left-0 w-full h-[1000px] bg-white dark:bg-black text-black dark:text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden flex flex-col font-semibold z-[-2]`}
      >
        <div className="translate-x-6 flex flex-col space-y-3 w-full gap-5 my-3">
          {NAV_ITEMS.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              label={link.label}
              onClick={scrollToSection}
              // Kirim state 'activeLink' ke NavLink
              isActive={activeLink === link.id}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import DarkModeToggle from "../../ui/DarkModeToggle/DarkModeToggle";
import useToggle from "../../hooks/useToggle";
import NavLink from "./Navlink";
import Button from "../../ui/Button/Button";

// Centralized navigation data for easy management.
const NAV_ITEMS = [
  { id: "Hero", label: "About" },
  { id: "Services", label: "Service" },
  { id: "Projects", label: "Projects" },
  { id: "Testimonials", label: "Testimonials" },
  { id: "FAQ", label: "FAQ" },
];

const Navbar: React.FC = () => {
  // Use of a custom hook (useToggle) to manage mobile menu state. This improves code reusability and clarity.
  const { isOpen, toggle, close } = useToggle(false);
  // Using useState to track the currently active link based on scroll position.
  const [activeLink, setActiveLink] = useState('Hero');

  // useEffect is used to handle side effects, such as adding and removing a scroll event listener.
  // This ensures proper resource cleanup and prevents memory leaks.
  useEffect(() => {
    // This function checks the viewport position of each section to determine the active link.
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

  // This function handles smooth scrolling when a navigation link is clicked.
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      // The activeLink state is updated here to ensure the clicked link is immediately highlighted.
      setActiveLink(sectionId);
      close();
    }
  };

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white md:px-25 px-1 w-full h-21 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo */}
      <a href="#" onClick={() => scrollToSection('Hero')} className="flex items-center gap-2 translate-x-4 md:translate-0">
        <img className="md:scale-100 scale-80" src="./01_Navbar_mylogo.png" alt="logo" />
        <span className="md:text-2xl text-l font-bold">Your Logo</span>
      </a>

      {/* Desktop Navigation */}
      {/* Conditional rendering using Tailwind CSS classes ('hidden md:flex') to show or hide elements based on screen size. */}
      <nav className="hidden md:flex justify-center gap-8 font-semibold">
        {NAV_ITEMS.map((link) => (
          // 'NavLink' is a reusable component. Props like 'key' and 'isActive' demonstrate effective prop handling.
          <NavLink
            key={link.id}
            id={link.id}
            label={link.label}
            onClick={scrollToSection}
            isActive={activeLink === link.id}
          />
        ))}
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:flex items-center gap-4">
        <DarkModeToggle />
        <Button
          label="Let's Talk"
          className="cursor-pointer"
          onClick={() => scrollToSection("Form")}
        />
      </div>

      {/* Mobile */}
      {/* Conditional rendering for mobile-only view. */}
      <div className="flex items-center gap-2 md:hidden">
        <DarkModeToggle />
        <div className="z-50 pr-4">
          <Hamburger toggled={isOpen} toggle={toggle} size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Dynamic class names based on 'isOpen' state for animated sliding.
      This is a good example of conditional rendering for UI changes. */}
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
              isActive={activeLink === link.id}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
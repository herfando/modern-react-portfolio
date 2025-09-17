import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Hamburger from "hamburger-react";
import DarkModeToggle from "../../ui/DarkModeToggle/DarkModeToggle";


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);


  return (
  <nav className="bg-white dark:bg-black text-black dark:text-white md:px-25 px-1 w-full h-21 flex justify-between items-center fixed top-0 left-0 z-50">
    {/* Logo */}
    <div className="flex items-center gap-2 translate-x-4 md:translate-0">
        <img className="md:scale-100 scale-80" src="./public/1.mylogo.png" alt="logo" />
        <div className="md:text-2xl text-l font-bold">Your Logo</div>
    </div>
    {/* Menu Items */}
    <div className="hidden md:flex justify-center gap-8 font-semibold">
        <span>About</span>
        <span>Service</span>
        <span>Projects</span>
        <span>Testimonials</span>
        <span>FAQ</span>
    </div>
    {/* Dark Mode Toggle */}
    <DarkModeToggle />
    {/* Contact Button */}
    <Button className ="hidden md:block" label="Let's Talk" />
    {/* Hamburger Menu for Mobile */}
    <div className="md:hidden z-50 pr-4">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
    </div>

    {/* Display Hamburger Onclick */}
    <div className={`gap-5 fixed top-20 left-0 w-full h-[1000px] bg-white dark:bg-black text-black dark:text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden flex flex-col font-semibold z-[-2]`}>
        <div className="translate-x-6 flex flex-col space-y-3 w-full gap-5 my-3">
            <span onClick={() => setIsOpen(false)}>About</span>
            <span onClick={() => setIsOpen(false)}>Service</span>
            <span onClick={() => setIsOpen(false)}>Projects</span>
            <span onClick={() => setIsOpen(false)}>Testimonials</span>
            <span onClick={() => setIsOpen(false)}>FAQ</span>
        </div>
        <div className="flex w-full justify-center">
            <Button className=" w-full mx-6 md:mx-0 md:w-[197px] h-[44px]">Let's Talk</Button>
        </div>    
    </div>
  </nav>
  )
}

export default Navbar;
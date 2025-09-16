import React, { useState } from "react";
import Button from "../../ui/Button/Button";


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);


  return (
  <nav className=" w-full h-21 bg-white flex justify-between md:justify-around items-center px-4">
    {/* Logo */}
    <div className="flex items-center gap-2 translate-x-4 md:translate-0">
        <img src="./public/1.mylogo.png" alt="logo" />
        <div className="text-2xl font-bold">Your Logo</div>
    </div>
    {/* Menu Items */}
    <div className="hidden md:flex justify-center gap-8 font-semibold">
        <span>About</span>
        <span>Service</span>
        <span>Projects</span>
        <span>Testimonials</span>
        <span>FAQ</span>
    </div>
    {/* Contact Button */}
    <Button className ="hidden md:block" label="Let's Talk" />
    {/* Hamburger Menu for Mobile */}
    <button onClick={()=> setIsOpen(!isOpen)}className="text-black text-3xl md:hidden focus:outline-none z-50 translate-x-[-12px]">
        {isOpen ? '✖' : '☰'}
    </button>
    {/* Display Hambuerger Onclick */}
    <div className={` gap-5 fixed top-0 left-0 w-full h-[550px] bg-white text-black transform transition-transform duration-300 ease-in-out z-[-1] ${
        isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden flex flex-col justify-center font-semibold`}>
        <div className="translate-x-8 flex flex-col space-y-3 w-full gap-5 my-3">
            <span onClick={() => setIsOpen(false)}>About</span>
            <span onClick={() => setIsOpen(false)}>Service</span>
            <span onClick={() => setIsOpen(false)}>Projects</span>
            <span onClick={() => setIsOpen(false)}>Testimonials</span>
            <span onClick={() => setIsOpen(false)}>FAQ</span>
        </div>
        <div className="flex w-full justify-center">
            <Button className=" w-full mx-8 md:mx-0 md:w-[197px] h-[44px]">Let's Talk</Button>
        </div>    
    </div>
  </nav>
  )
}

export default Navbar;
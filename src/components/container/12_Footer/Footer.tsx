import React from "react";

const Footer = () => {
    return (
        <section className="py-10 px-[140px] max-[393px]:px-4 bg-white dark:bg-black text-black dark:text-white w-full">
    <div className="dark:bg-[#0A0D12] flex flex-col gap-[60px] p-10 max-[393px]:p-6 bg-[#fafafa] border border-[#dfdfdf] rounded-3xl">
    {/* BAGIAN ATAS: FLEX utk desktop, GRID utk mobile */}
    <div className="flex justify-between items-start max-[393px]:grid max-[393px]:grid-cols-1 max-[393px]:gap-4">
      {/* JUDUL */}
      <h2 className="leading-11 text-4xl font-bold max-[393px]:order-2 max-[393px]:text-3xl max-[393px]:leading-9">
        LET'S DISCUSS YOUR IDEAS
      </h2>
      {/* LOGO */}
      <div className="flex h-[29.59px] w-[150px] pr-7 max-[393px]:pr-0 max-[393px]:pl-7 scale-150 font-bold justify-end max-[393px]:justify-start max-[393px]:order-1">
        <img className="w-109px pr-3" src="./logo-symbol.png" />Your Logo
      </div>
    </div>
    {/* GARIS PEMBATAS */}
    <div className="basis-[1px] bg-[#dfdfdf]"></div>
    {/* NAVIGATION & SOCIAL MEDIA */}
    <div className="flex justify-between items-start max-[393px]:flex-col max-[393px]:gap-6">     
      {/* MENU NAVIGASI */}
      <ul className="flex flex-wrap max-[393px]:flex-col max-[393px]:gap-0">
        <li><a className="block py-2 px-4 rounded-full" href="#About ">About</a></li>
        <li><a className="block py-2 px-4 rounded-full" href="#Service">Service</a></li>
        <li><a className="block py-2 px-4 rounded-full" href="#Projects">Projects</a></li>
        <li><a className="block py-2 px-4 rounded-full" href="#Testimonials">Testimonials</a></li>
        <li><a className="block py-2 px-4 rounded-full" href="#FAQ">FAQ</a></li>
      </ul>
      {/* IKON SOSIAL MEDIA */}
      <ul className="flex gap-4 max-[393px]:self-start max-[393px]:pt-2">
        <li>
          <a className="block w-10 h-10 border border-[#dfdfdf] py-[9.5px] rounded-full filter invert dark:filter-none" href="#">
            <img className="mx-auto" src="./fb.png" />
          </a>
        </li>
        <li>
          <a className="block w-10 h-10 border border-[#dfdfdf] py-[9.5px] rounded-full filter invert dark:filter-none" href="#">
            <img className="mx-auto" src="./ig.png" />
          </a>
        </li>
        <li>
          <a className="block w-10 h-10 border border-[#dfdfdf] py-[9.5px] rounded-full filter invert dark:filter-none" href="#">
            <img className="mx-auto" src="./linkeid.png" />
          </a>
        </li>
        <li>
          <a className="block w-10 h-10 border border-[#dfdfdf] py-[9.5px] rounded-full filter invert dark:filter-none" href="#">
            <img className="mx-auto" src="./tiktok.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    )
}
export default Footer;

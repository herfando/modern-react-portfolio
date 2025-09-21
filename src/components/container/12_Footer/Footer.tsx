import React from 'react';

// Komponen kecil untuk tautan navigasi
interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <li>
    <a className="block py-2 px-4 rounded-full" href={href}>
      {label}
    </a>
  </li>
);

// Komponen kecil untuk ikon media sosial
interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, src, alt }) => (
  <li>
    <a
      className="block w-10 h-10 border border-[#dfdfdf] p-[9.5px] rounded-full filter invert dark:filter-none"
      href={href}
      aria-label={alt}
    >
      <img className="mx-auto" src={src} alt={alt} />
    </a>
  </li>
);

const Footer: React.FC = () => {
  return (
    <section className="py-10 md:px-[140px] px-4 bg-white dark:bg-black text-black dark:text-white w-full">
      <div className="dark:bg-[#0A0D12] flex flex-col gap-[60px] md:p-10 p-6 bg-[#fafafa] border border-[#dfdfdf] rounded-3xl">
        <div className="md:flex justify-between items-start grid grid-cols-1 gap-4 md:gap-0">
          {/* JUDUL */}
          <h2 className="md:leading-11 md:text-4xl font-bold order-2 md:order-1 text-3xl leading-9">
            LET'S DISCUSS YOUR IDEAS
          </h2>
          {/* LOGO */}
          <div className="flex h-[29.59px] w-[150px] md:pr-7 pr-0 pl-7 md:pl-0 scale-150 font-bold md:justify-end justify-start order-1 md:order-2">
            <img className="w-109px pr-3" src="./12_Footer_logo.png" alt="Your Logo" />
            Your Logo
          </div>
        </div>
        {/* GARIS PEMBATAS */}
        <div className="basis-[1px] bg-[#dfdfdf]"></div>
        {/* NAVIGATION & SOCIAL MEDIA */}
        <div className="flex justify-between items-start max-[393px]:flex-col md:flex-raw gap-6 md:gap-0">
          {/* MENU NAVIGASI */}
          <ul className="flex flex-wrap max-[393px]:flex-col max-[393px]:gap-0">
            <NavLink href="#Hero " label="About" />
            <NavLink href="#Service" label="Service" />
            <NavLink href="#Projects" label="Projects" />
            <NavLink href="#Testimonials" label="Testimonials" />
            <NavLink href="#FAQ" label="FAQ" />
          </ul>
          {/* IKON SOSIAL MEDIA */}
          <ul className="flex gap-4 max-[393px]:self-start max-[393px]:pt-2">
            <SocialIcon href="#" src="./12_Footer_fb.png" alt="Facebook" />
            <SocialIcon href="#" src="./12_Footer_ig.png" alt="Instagram" />
            <SocialIcon href="#" src="./12_Footer_linkeid.png" alt="LinkedIn" />
            <SocialIcon href="#" src="./12_Footer_tiktok.png" alt="TikTok" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
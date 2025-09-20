import React from "react";

const SERVICES = [
  {
    title: "Web Development",
    subtitle: "Build fast, scalable, and SEO-friendly websites.",
    imageSrc: "./Website.png",
    imageAlt: "website",
  },
  {
    title: "Mobile App Development",
    subtitle: "Native & cross-platform apps tailored to user needs.",
    imageSrc: "./Mobile App Development.png",
    imageAlt: "Mobile App Development",
  },
  {
    title: "UI/UX Design",
    subtitle: "Delight users with intuitive and beautiful interfaces.",
    imageSrc: "./UX Design.png",
    imageAlt: "UX Design",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Secure and flexible cloud infrastructure for your growth.",
    imageSrc: "./Cloud Solutions.png",
    imageAlt: "Cloud Solutions",
  },
  {
    title: "Software Development",
    subtitle: "Custom solutions built around your business logic.",
    imageSrc: "./Software Development.png",
    imageAlt: "Software Development",
  },
  {
    title: "IT Infrastructure",
    subtitle: "Scale your backend with reliable tech foundations.",
    imageSrc: "./IT Infrastructure.png",
    imageAlt: "IT Infrastructure",
  },
  {
    title: "Cybersecurity Services",
    subtitle: "Stay protected with enterprise-grade security.",
    imageSrc: "./Cybersecurity Services.png",
    imageAlt: "Cybersecurity Services",
  },
  {
    title: "QA Solutions",
    subtitle: "Ensure performance with rigorous testing frameworks.",
    imageSrc: "./QASolutions.png",
    imageAlt: "QA Solutions",
  },
  {
    title: "IT Consulting & Support",
    subtitle: "Make smarter tech decisions with expert guidance.",
    imageSrc: "./IT Consulting & Support.png",
    imageAlt: "IT Consulting & Support",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="Services"
      className="flex flex-col gap-16 py-20 px-[140px] max-[393px]:py-10 max-[393px]:px-3.5 dark:bg-black text-black dark:text-white w-full"
    >
      <div className="flex flex-col gap-[11px] text-center">
        <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-3xl max-[393px]:w-full">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680]">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-10 gap-x-5">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer"
          >
            <div className="flex flex-col gap-5 mt-[-30px]">
              <div>
                <img src={service.imageSrc} alt={service.imageAlt} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="leading-[34px] text-xl font-bold">
                  {service.title}
                </h3>
                <p className="leading-[30px] text-base font-medium text-[#717680]">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
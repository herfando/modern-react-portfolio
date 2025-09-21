import React from "react";

// Centralized data array for all services. This approach is highly scalable,
// making it easy to add, remove, or modify services without changing the component's structure.
const SERVICES = [
  {
    title: "Web Development",
    subtitle: "Build fast, scalable, and SEO-friendly websites.",
    imageSrc: "./06_Services_website.png",
    imageAlt: "website",
  },
  {
    title: "Mobile App Development",
    subtitle: "Native & cross-platform apps tailored to user needs.",
    imageSrc: "./06_Services_mobile_app_development.png",
    imageAlt: "Mobile App Development",
  },
  {
    title: "UI/UX Design",
    subtitle: "Delight users with intuitive and beautiful interfaces.",
    imageSrc: "./06_Services_UX_design.png",
    imageAlt: "UX Design",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Secure and flexible cloud infrastructure for your growth.",
    imageSrc: "./06_Services_cloud_solutions.png",
    imageAlt: "Cloud Solutions",
  },
  {
    title: "Software Development",
    subtitle: "Custom solutions built around your business logic.",
    imageSrc: "./06_Services_software_development.png",
    imageAlt: "Software Development",
  },
  {
    title: "IT Infrastructure",
    subtitle: "Scale your backend with reliable tech foundations.",
    imageSrc: "./06_Services_IT_infrastructure.png",
    imageAlt: "IT Infrastructure",
  },
  {
    title: "Cybersecurity Services",
    subtitle: "Stay protected with enterprise-grade security.",
    imageSrc: "./06_Services_cybersecurity_services.png",
    imageAlt: "Cybersecurity Services",
  },
  {
    title: "QA Solutions",
    subtitle: "Ensure performance with rigorous testing frameworks.",
    imageSrc: "./06_Services_QA_solutions.png",
    imageAlt: "QA Solutions",
  },
  {
    title: "IT Consulting & Support",
    subtitle: "Make smarter tech decisions with expert guidance.",
    imageSrc: "./06_Services_IT_consulting_&_support.png",
    imageAlt: "IT Consulting & Support",
  },
];

const Services: React.FC = () => {
  return (
    // The `id` attribute is added here to serve as an anchor for in-page navigation.
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

      {/* This grid layout is responsive, stacking on smaller screens (grid-cols-1)
      and expanding to three columns on medium-sized screens and up (md:grid-cols-3). */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-10 gap-x-5">
        {/* Mapping over the SERVICES array to dynamically render each service card.
        This is a standard React pattern for generating a list of components from data. */}
        {SERVICES.map((service, index) => (
          // The `key` prop is crucial for React to uniquely identify each element in the list,
          // which helps optimize rendering performance.
          <div
            key={index}
            className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer"
          >
            <div className="flex flex-col gap-5 mt-[-30px]">
              <div>
                {/* The image's `alt` attribute is vital for accessibility,
                providing a text description for screen readers and search engines. */}
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
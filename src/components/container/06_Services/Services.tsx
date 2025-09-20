import React from "react";
const Services = () => {
    return (
        <section id="Services" className="flex flex-col gap-16  py-20 px-[140px] max-[393px]:py-10  max-[393px]:px-3.5  dark:bg-black text-black dark:text-white w-full">
      <div className="flex flex-col gap-[11px] text-center">
        <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-3xl max-[393px]:w-full">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680]">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>
      {/* Card Web Development */}
      <div className="grid grid-cols-3 max-[393px]:grid-cols-1 gap-y-10 gap-x-5">
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./Website.png" alt="website" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">Web Development</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Build fast, scalable, and SEO-friendly websites.
              </p>
            </div>
          </div>
        </div>
        {/* Card Mobile App Development */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./Mobile App Development.png" alt="Mobile App Development" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">Mobile App Development</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Native & cross-platform apps tailored to user needs.
              </p>
            </div>
          </div>
        </div>
        {/* Card UI/UX Design */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./UX Design.png" alt="UX Design" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">UI/UX Design</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Delight users with intuitive and beautiful interfaces.
              </p>
            </div>
          </div>
        </div>
        {/* Card Cloud Solutions */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./Cloud Solutions.png" alt="Cloud Solutions" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">Cloud Solutions</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Secure and flexible cloud infrastructure for your growth.
              </p>
            </div>
          </div>
        </div>
        {/* Card Software Development */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./Software Development.png" alt="Software Development" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">Software Development</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Custom solutions built around your business logic.
              </p>
            </div>
          </div>
        </div>
        {/* Card IT Infrastructure */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./IT Infrastructure.png" alt="IT Infrastructure" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">IT Infrastructure</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Scale your backend with reliable tech foundations.
              </p>
            </div>
          </div>
        </div>
        {/* Card Cybersecurity Services */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./Cybersecurity Services.png" alt="Cybersecurity Services" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">Cybersecurity Services</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Stay protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
        {/* Card QA Solutions */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./QASolutions.png" alt="QA Solutions" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">QA Solutions</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Ensure performance with rigorous testing frameworks.
              </p>
            </div>
          </div>
        </div>
        {/* Card IT Consulting & Support */}
        <div className="pb-5 px-5 border border-[#dcdcdc] rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-5 mt-[-30px]">
            <div><img src="./IT Consulting & Support.png" alt="IT Consulting & Support" /></div>
            <div className="flex flex-col gap-1">
              <h3 className="leading-[34px] text-xl font-bold">IT Consulting & Support</h3>
              <p className="leading-[30px] text-base font-medium text-[#717680]">
                Make smarter tech decisions with expert guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Services;
import React, { useState } from "react";

const INDUSTRIES = [
  {
    id: "fintech",
    title: "Fintech",
    description: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    imageSrc: "./Industry Image.png",
    imageAlt: "Industry Image",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    imageSrc: "./E-Commerce.png",
    imageAlt: "E-Commerce Image",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    imageSrc: "./Healthcare.png",
    imageAlt: "Healthcare Image",
  },
];

const Industry: React.FC = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const activeIndustry = INDUSTRIES.find(industry => industry.id === activeTab);

  return (
    <section className="max-[393px]:py-10 max-[393px]:px-3.5 flex flex-col gap-16 py-20 px-[140px] bg-white dark:bg-black text-black dark:text-white w-full">
      {/* Judul & Subjudul */}
      <div className="flex flex-col gap-[11px]">
        <h2 className="leading-14 text-[40px] max-[393px]:text-[33px] font-bold">
          Built for Your Industry
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680]">
          We’ve helped companies across industries launch smarter, faster, and more securely.
        </p>
      </div>

      {/* Konten Utama */}
      <div className="grid md:grid-cols-[150px_1fr] gap-16 grid-cols-1 max-[393px]:gap-10">
        {/* Kolom kiri: Daftar industri */}
        <div className="flex flex-col gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="industry-tab flex gap-2 cursor-pointer items-center"
              onClick={() => handleTabClick(industry.id)}
            >
              <div
                className={`indicator w-[4px] h-[34px] rounded-[100px] ${
                  activeTab === industry.id ? "bg-[#ff623e]" : "bg-[#aaa]"
                }`}
              ></div>
              <h3 className="leading-[34px] text-xl font-bold">{industry.title}</h3>
            </div>
          ))}
        </div>

        {/* Kolom kanan: Deskripsi & Gambar */}
        <div className="flex flex-col gap-5 grow">
          {activeIndustry && (
            <div
              id={activeIndustry.id}
              className="industry-card flex flex-col gap-5"
            >
              <p className="leading-8 text-lg font-medium max-[393px]:font-light">
                {activeIndustry.description}
              </p>
              <img
                className="rounded-3xl max-[393px]:h-[200px]"
                src={activeIndustry.imageSrc}
                alt={activeIndustry.imageAlt}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Industry;
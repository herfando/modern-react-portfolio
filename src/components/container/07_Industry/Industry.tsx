import React, { useState } from "react";

const Industry = () => {
  // Menggunakan state untuk melacak tab mana yang aktif.
  const [activeTab, setActiveTab] = useState("fintech");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

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
      <div className="flex gap-16 max-[393px]:flex-col max-[393px]:gap-10">
        {/* Kolom kiri: Daftar industri */}
        <div className="flex flex-col gap-6 basis-[256px] shrink-0 max-[393px]:basis-[156px]">
          {/* Fintech */}
          <div
            className="industry-tab flex gap-2 cursor-pointer items-center"
            onClick={() => handleTabClick("fintech")}
          >
            <div
              className={`indicator w-[4px] h-[34px] rounded-[100px] ${
                activeTab === "fintech" ? "bg-[#ff623e]" : "bg-[#aaa]"
              }`}
            ></div>
            <h3 className="leading-[34px] text-xl font-bold">Fintech</h3>
          </div>

          {/* E-Commerce */}
          <div
            className="industry-tab flex gap-2 cursor-pointer items-center"
            onClick={() => handleTabClick("ecommerce")}
          >
            <div
              className={`indicator w-[4px] h-[34px] rounded-[100px] ${
                activeTab === "ecommerce" ? "bg-[#ff623e]" : "bg-[#aaa]"
              }`}
            ></div>
            <h3 className="leading-[34px] text-xl font-bold">E-Commerce</h3>
          </div>

          {/* Healthcare */}
          <div
            className="industry-tab flex gap-2 cursor-pointer items-center"
            onClick={() => handleTabClick("healthcare")}
          >
            <div
              className={`indicator w-[4px] h-[34px] rounded-[100px] ${
                activeTab === "healthcare" ? "bg-[#ff623e]" : "bg-[#aaa]"
              }`}
            ></div>
            <h3 className="leading-[34px] text-xl font-bold">Healthcare</h3>
          </div>
        </div>

        {/* Kolom kanan: Deskripsi & Gambar */}
        <div className="relative w-full">
          {activeTab === "fintech" && (
            <div id="fintech" className="industry-card flex flex-col gap-5 grow">
              <p className="leading-8 text-lg font-medium max-[393px]:font-light">
                We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.
              </p>
              <img className="rounded-3xl max-[393px]:h-[200px]" src="./Industry Image.png" alt="Industry Image" />
            </div>
          )}

          {activeTab === "ecommerce" && (
            <div id="ecommerce" className="industry-card flex-col gap-5 grow">
              <p className="leading-8 text-lg font-medium max-[393px]:font-light">
                Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.
              </p>
              <img className="rounded-3xl max-[393px]:h-[200px]" src="./E-Commerce.png" alt="E-Commerce Image" />
            </div>
          )}

          {activeTab === "healthcare" && (
            <div id="healthcare" className="industry-card flex-col gap-5 grow">
              <p className="leading-8 text-lg font-medium max-[393px]:font-light">
                Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.
              </p>
              <img className="rounded-3xl max-[393px]:h-[200px]" src="./Healthcare.png" alt="Healthcare Image" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Industry;
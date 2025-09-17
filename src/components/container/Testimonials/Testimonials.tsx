import React, { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  // 1. Definisikan state untuk melacak slide yang aktif.
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. Gunakan useRef untuk mendapatkan referensi ke elemen DOM.
  const sliderRef = useRef(null);
  const testimonialCardsRef = useRef([]);

  // 3. Gunakan useEffect untuk menjalankan efek samping,
  //    seperti saat komponen di-mount atau state berubah.
  useEffect(() => {
    // Fungsi untuk memperbarui slider.
    const updateSlider = () => {
      if (!sliderRef.current || testimonialCardsRef.current.length === 0) {
        return;
      }

      const isMobile = window.innerWidth <= 393;
      const slider = sliderRef.current;

      if (isMobile) {
        const cardWidth = testimonialCardsRef.current[0].offsetWidth + 16;
        const containerWidth = slider.parentElement.offsetWidth;
        const offset = currentSlide * cardWidth - (containerWidth - cardWidth) / 2;
        slider.style.transform = `translateX(-${offset}px)`;
      } else {
        const cardWidth = 594 + 925; // Lebar card + gap pada desktop
        slider.style.transform = `translateX(-${currentSlide * cardWidth - 465}px)`;
      }
    };

    // Jalankan fungsi updateSlider saat komponen pertama kali di-render
    // dan saat currentSlide berubah.
    updateSlider();

    // Tambahkan event listener untuk resize window.
    window.addEventListener("resize", updateSlider);
    
    // Cleanup function: hapus event listener saat komponen unmount.
    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [currentSlide]); // Dependency array: efek akan dijalankan kembali jika currentSlide berubah.

  // 4. Fungsi untuk menangani klik tombol navigasi.
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="Testimonials" className="max-[393px]:py-10 max-[393px]:px-3.5 flex flex-col gap-20 py-20 bg-white dark:bg-black text-black dark:text-white w-full">
      {/* Judul */}
      <div className="flex flex-col gap-[11px] text-center">
        <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-[30px] max-[393px]:font-medium">
          What Partners Say About Working With Us
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680] max-[393px]:text-[17px] max-[393px]:font-light">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* Card Container */}
      <div className="relative overflow-hidden max-[393px]:h-[483px] max-[393px]:pt-0 pt-[25px]">
        {/* Slider Wrapper */}
        <div ref={sliderRef} id="testimonialSlider" className="flex flex-nowrap gap-[925px] max-[393px]:gap-4 max-[393px]:pb-[60px] max-[393px]:w-max transition-transform duration-500 ease-in-out pl-[465px] max-[393px]:pl-0">
          {/* Card 1 */}
          <div ref={(el) => (testimonialCardsRef.current[0] = el)} className="testimonial-card w-[594px] max-[393px]:w-[361px] max-[393px]:h-[284px] flex-shrink-0 h-[292px] p-[1px] bg-gradient-to-br from-[#ff6c37] to-[#dedcdc] rounded-[18px] relative" data-index="0">
            <div className="h-full bg-[#fafafa] dark:bg-[#0A0D12] rounded-2xl relative">
              <div className="flex flex-col gap-6 pt-6 px-6 ">
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex gap-1">
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                  </div>
                  <p className="leading-8 text-lg font-semibold text-center">
                    “Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="leading-8 text-lg font-semibold">John Lee</h3>
                  <p className="leading-8 text-lg font-semibold text-[#ff623e]">Creative Director at Innovate Corp</p>
                </div>
                <div className="basis-[75px]">
                  <img className="mx-auto" src="./johnlee.png" alt="John Lee" />
                </div>
              </div>
              <div className="relative top-[-360px] left-10 w-[46px] max-[393px]:top-[-395px]">
                <img src="./Vector.png" alt="Quote Icon" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={(el) => (testimonialCardsRef.current[1] = el)} className="testimonial-card w-[594px] max-[393px]:w-[361px] max-[393px]:h-[284px] flex-shrink-0 h-[292px] p-[1px] bg-gradient-to-br from-[#ff6c37] to-[#dedcdc] rounded-[18px] relative" data-index="1">
            <div className="h-full bg-[#fafafa] dark:bg-[#0A0D12] rounded-2xl relative">
              <div className="flex flex-col gap-6 pt-6 px-6">
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex gap-1">
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                  </div>
                  <p className="leading-8 text-lg font-semibold text-center">
                    “The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="leading-8 text-lg font-semibold">Sarah Tan</h3>
                  <p className="leading-8 text-lg font-semibold text-[#ff623e]">Product Manager at Finovate</p>
                </div>
                <div className="basis-[75px]">
                  <img className="mx-auto" src="./sarahtan.png" alt="Sarah Tan" />
                </div>
              </div>
              <div className="relative top-[-360px] left-10 w-[46px] max-[393px]:top-[-425px]">
                <img src="./Vector.png" alt="Quote Icon" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div ref={(el) => (testimonialCardsRef.current[2] = el)} className="testimonial-card w-[594px] max-[393px]:w-[361px] max-[393px]:h-[284px] flex-shrink-0 h-[292px] p-[1px] bg-gradient-to-br from-[#ff6c37] to-[#dedcdc] rounded-[18px] relative" data-index="2">
            <div className="h-full bg-[#fafafa] dark:bg-[#0A0D12] rounded-2xl relative">
              <div className="flex flex-col gap-6 pt-6 px-6">
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex gap-1">
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                    <img src="./line-md_star-filled.png" alt="Star" />
                  </div>
                  <p className="leading-8 text-lg font-semibold text-center">
                    “The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="leading-8 text-lg font-semibold">Emily Chen</h3>
                  <p className="leading-8 text-lg font-semibold text-[#ff623e]">Marketing Head at Tech Solutions</p>
                </div>
                <div className="basis-[75px]">
                  <img className="mx-auto" src="./emilychen.png" alt="Emily Chen" />
                </div>
              </div>
              <div className="relative top-[-360px] left-10 w-[46px] max-[393px]:top-[-425px]">
                <img src="./Vector.png" alt="Quote Icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Dot Navigasi */}
        <ul className="mt-16 flex justify-center gap-2 max-[393px]:mt-20">
          <li>
            <button
              className={`dot w-3 h-3 rounded-full ${currentSlide === 0 ? "bg-[#ff6c37]" : "bg-[#e5e5e5]"}`}
              onClick={() => goToSlide(0)}
            ></button>
          </li>
          <li>
            <button
              className={`dot w-3 h-3 rounded-full ${currentSlide === 1 ? "bg-[#ff6c37]" : "bg-[#e5e5e5]"}`}
              onClick={() => goToSlide(1)}
            ></button>
          </li>
          <li>
            <button
              className={`dot w-3 h-3 rounded-full ${currentSlide === 2 ? "bg-[#ff6c37]" : "bg-[#e5e5e5]"}`}
              onClick={() => goToSlide(2)}
            ></button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
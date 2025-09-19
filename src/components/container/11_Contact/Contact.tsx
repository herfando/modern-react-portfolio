import React, { useState } from "react";

const Contact = () => {
  // 1. Definisikan state untuk mengelola status popup
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  // 2. State untuk mengelola input formulir (opsional tapi disarankan)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
  });

  // 3. Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    // Menangani input checkbox
    if (type === "checkbox") {
      setFormData((prevData) => {
        if (checked) {
          return { ...prevData, services: [...prevData.services, value] };
        } else {
          return {
            ...prevData,
            services: prevData.services.filter((service) => service !== value),
          };
        }
      });
    } else {
      // Menangani input teks
      setFormData({ ...formData, [id]: value });
    }
  };

  // 4. Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logika validasi sederhana
    if (formData.name && formData.email && formData.message) {
      // Simulasi pengiriman data
      console.log("Form data submitted:", formData);

      // Tampilkan popup sukses
      setShowSuccessPopup(true);
      setShowErrorPopup(false); // Pastikan popup error disembunyikan
    } else {
      // Tampilkan popup error jika ada input kosong
      setShowErrorPopup(true);
      setShowSuccessPopup(false); // Pastikan popup sukses disembunyikan
    }
  };

  // 5. Fungsi untuk menutup popup
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setShowErrorPopup(false);
  };

  return (
    // Membungkus semua elemen dalam satu fragment (<>)
    <>
      {/* Overlay blur dikendalikan oleh state */}
      {(showSuccessPopup || showErrorPopup) && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm dark:bg-black/60"></div>
      )}

      <section
        id="Form"
        className="relative flex flex-col gap-16 py-20 px-[140px] max-[393px]:px-4 bg-white dark:bg-black text-black dark:text-white w-full"
      >
        {/* Judul dan deskripsi */}
        <div className="flex flex-col gap-[11px] text-center">
          <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-[28px]">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="leading-8 text-[18px] font-medium text-[#717680] max-[393px]:text-[16px]">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* Formulir utama */}
        <form onSubmit={handleSubmit} className="w-[720px] mx-auto max-[393px]:w-full">
          <fieldset className="flex flex-col gap-10">
            {/* Input data */}
            <div className="flex flex-col gap-5">
              {/* Input Nama */}
              <div className="flex flex-col gap-1.5">
                <label className="leading-7 text-sm font-bold" htmlFor="name">Name</label>
                <input
                  id="name"
                  className="hover:bg-blue-300 py-2 px-4 border border-[#dfdfdf] leading-[30px] rounded-xl"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              {/* Input Email */}
              <div className="flex flex-col gap-1.5">
                <label className="leading-7 text-sm font-bold" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="hover:bg-blue-300 py-2 px-4 border border-[#dfdfdf] leading-[30px] rounded-xl"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Input Pesan */}
              <div className="flex flex-col gap-1.5">
                <label className="leading-7 text-sm font-bold" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="hover:bg-blue-300 py-2 px-4 border border-[#dfdfdf] leading-[30px] rounded-xl"
                  rows="4"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {/* Pilihan layanan */}
              <div className="flex flex-col gap-1.5">
                <label className="leading-7 text-sm font-bold">Services</label>
                {/* Menggunakan komentar JSX */}
                <div className="flex gap-[37px] max-[393px]:flex-col max-[393px]:gap-[0px]">
                  {/* Kolom kiri */}
                  <div className="basis-[232px] flex flex-col gap-4 max-[393px]:basis-[0px]">
                    <label className="flex gap-3 items-center">
                      <input type="checkbox" className="accent-[#FF623E] form-checkbox w-[20px] h-[20px]" id="Web Development" value="Web Development" onChange={handleInputChange}/>
                      <span>Web Development</span>
                    </label>
                    <label className="flex gap-3 items-center">
                      <input type="checkbox" className="accent-[#FF623E] form-checkbox w-[20px] h-[20px]" id="Mobile App Development" value="Mobile App Development" onChange={handleInputChange}/>
                      <span>Mobile App Development</span>
                    </label>
                    <label className="flex gap-3 items-center">
                      <input type="checkbox" className="accent-[#FF623E] form-checkbox w-[20px] h-[20px]" id="UI/UX Design" value="UI/UX Design" onChange={handleInputChange}/>
                      <span>UI/UX Design</span>
                    </label>
                  </div>
                  {/* Kolom kanan */}
                  <div className="basis-[232px] flex flex-col gap-4 max-[393px]:basis-[0px] max-[393px]:mt-4">
                    <label className="flex gap-3 items-center">
                      <input type="checkbox" className="accent-[#FF623E] form-checkbox w-[20px] h-[20px]" id="Cloud Solutions" value="Cloud Solutions" onChange={handleInputChange}/>
                      <span>Cloud Solutions</span>
                    </label>
                    <label className="flex gap-3 items-center">
                      <input type="checkbox" className="accent-[#FF623E] form-checkbox w-[20px] h-[20px]" id="Software Development" value="Software Development" onChange={handleInputChange}/>
                      <span>Software Development</span>
                    </label>
                    <label className="flex gap-3 items-center">
                      <input type="checkbox" className="accent-[#FF623E] form-checkbox w-[20px] h-[20px]" id="Other" value="Other" onChange={handleInputChange}/>
                      <span>Other</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol Kirim */}
            <button
              id="sendBtn"
              type="submit"
              className="active:bg-blue-400 bg-[#ff623e] p-2 rounded-full leading-[30px] text-white font-bold cursor-pointer"
            >
              Send
            </button>
          </fieldset>
        </form>
      </section>

      {/* Popup message received, dikendalikan oleh state */}
      {showSuccessPopup && (
        <dialog
          open
          className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto items-center rounded-2xl grid grid-cols-1 place-items-center place-content-center"
        >
          <div className="max-[393px]:h-[160px] max-[393px]:w-[353px] rounded-t-3xl h-[225px] w-[518px] dark:bg-[#0A0D12] items-center grid place-items-center">
            <img className="mb-6 max-[393px]:h-[140px] max-[393px]:w-[140px]" src="./Message received.png" alt="message received" />
          </div>
          <div className="max-[393px]:h-[214px] max-[393px]:w-[353px] rounded-b-3xl bg-[#FFFFFF] dark:bg-[#000000] h-[254px] w-[518px] grid grid-cols-1 place-items-center place-content-center">
            <p className="w-[400px] max-[393px]:w-[305px] dark:text-[#FDFDFD] font-bold text-center max-[393px]:text-xl text-2xl">
              Message Received!
              <br />
              <span className="text-[#717680] font-medium text-xl max-[393px]:text-base">
                Thanks for reaching out — we’ll get back to you as soon as possible.
              </span>
            </p>
            <button
              onClick={handleClosePopup}
              className="text-[#FFFFFF] bg-[#FF623E] font-bold max-[393px]:w-[305px] w-[361px] h-[48px] rounded-full mt-10"
            >
              Back to Home
            </button>
          </div>
        </dialog>
      )}

      {/* Popup message not received, dikendalikan oleh state */}
      {showErrorPopup && (
        <dialog
          open
          className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto items-center rounded-2xl grid grid-cols-1 place-items-center place-content-center"
        >
          <div className="max-[393px]:h-[160px] max-[393px]:w-[353px] rounded-t-3xl h-[225px] w-[518px] dark:bg-[#0A0D12] items-center grid place-items-center">
            <img className="mb-6 max-[393px]:h-[140px] max-[393px]:w-[140px]" src="./Message not received.png" alt="message not received" />
          </div>
          <div className="max-[393px]:h-[214px] max-[393px]:w-[353px] rounded-b-3xl bg-[#FFFFFF] dark:bg-[#000000] h-[254px] w-[518px] grid grid-cols-1 place-items-center place-content-center">
            <p className="w-[400px] max-[393px]:w-[305px] dark:text-[#FDFDFD] font-bold text-center max-[393px]:text-xl text-2xl">
              Oops! Something went wrong.
              <br />
              <span className="text-[#717680] font-medium text-xl max-[393px]:text-base">
                We couldn’t send your message. Please try again or check your connection.
              </span>
            </p>
            <button
              onClick={handleClosePopup}
              className="text-[#FFFFFF] bg-[#FF623E] font-bold max-[393px]:w-[305px] w-[361px] h-[48px] rounded-full mt-10"
            >
              Back to Home
            </button>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Contact;
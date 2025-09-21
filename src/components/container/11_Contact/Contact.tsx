import React, { useState } from 'react';
import useContact from '../../hooks/useContact';
import ContactUI from '../../ui/ContactUI';
import PopupUI from '../../ui/Popup';

const Contact = () => {
  const { formData, handleInputChange, resetForm } = useContact();
  const [showPopup, setShowPopup] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      console.log("Form data submitted:", formData);
      setShowPopup('success');
      resetForm();
    } else {
      setShowPopup('error');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <>
      {(showPopup) && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm dark:bg-black/60"></div>
      )}

      <section
        id="Form"
        className="relative flex flex-col gap-16 py-20 px-[140px] max-[393px]:px-4 bg-white dark:bg-black text-black dark:text-white w-full"
      >
        <div className="flex flex-col gap-[11px] text-center">
          <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-[28px]">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="leading-8 text-[18px] font-medium text-[#717680] max-[393px]:text-[16px]">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>
        <ContactUI formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      </section>

      {showPopup === 'success' && <PopupUI type="success" onClose={handleClosePopup} />}
      {showPopup === 'error' && <PopupUI type="error" onClose={handleClosePopup} />}
    </>
  );
};

export default Contact;
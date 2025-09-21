import React, { useState } from 'react';
import useContact from '../../hooks/useContact';
import ContactUI from '../../ui/ContactUI';
import PopupUI from '../../ui/Popup';

const Contact = () => {
  // `useContact` is a custom hook that encapsulates the form's state and logic (formData, handleInputChange, resetForm).
  // This is a good practice for keeping components clean and reusing logic across your application.
  const { formData, handleInputChange, resetForm } = useContact();
  // `useState` manages the state of the popup. It can be 'success', 'error', or null (hidden).
  const [showPopup, setShowPopup] = useState<'success' | 'error' | null>(null);

  // This function handles form submission. It prevents the default page reload,
  // checks if the form data is valid, and then shows the appropriate popup.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      console.log("Form data submitted:", formData);
      setShowPopup('success');
      // The `resetForm` function from the custom hook clears the form fields after a successful submission.
      resetForm();
    } else {
      setShowPopup('error');
    }
  };

  // This function is passed to the PopupUI component to handle closing the popup.
  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <>
      {/* This is a simple, effective way to create a semi-transparent overlay (backdrop) when a popup is visible. */}
      {/* The `showPopup` state conditionally renders this overlay. */}
      {(showPopup) && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm dark:bg-black/60"></div>
      )}

      <section
        // The `id` attribute is crucial for in-page navigation, allowing other components to link directly to the form.
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
        {/* The `ContactUI` component is responsible for the visual presentation of the form,
        while the parent `Contact` component handles the state and logic. This separation of concerns is a core principle of good React architecture. */}
        <ContactUI formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      </section>

      {/* Conditional rendering for the popups. The correct popup is displayed based on the `showPopup` state. */}
      {showPopup === 'success' && <PopupUI type="success" onClose={handleClosePopup} />}
      {showPopup === 'error' && <PopupUI type="error" onClose={handleClosePopup} />}
    </>
  );
};

export default Contact;
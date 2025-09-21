import React from 'react';

// Definisikan tipe props untuk komponen ContactUI
interface ContactUIProps {
  formData: {
    name: string;
    email: string;
    message: string;
    services: string[];
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormInput: React.FC<{ id: string; label: string; type: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ id, label, type, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="leading-7 text-sm font-bold" htmlFor={id}>{label}</label>
    <input
      id={id}
      className="hover:bg-blue-300 py-2 px-4 border border-[#dfdfdf] leading-[30px] rounded-xl"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const FormCheckbox: React.FC<{ id: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; checked: boolean; }> = ({ id, label, value, onChange, checked }) => (
  <label className="flex gap-3 items-center">
    <input
      type="checkbox"
      className="accent-[#FF623E] form-checkbox w-[20px] h-[20px]"
      id={id}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <span>{label}</span>
  </label>
);

const ContactUI: React.FC<ContactUIProps> = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="md:w-[720px] mx-auto w-full">
      <fieldset className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <FormInput
            id="name"
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          />
          <div className="flex flex-col gap-1.5">
            <label className="leading-7 text-sm font-bold" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="hover:bg-blue-300 py-2 px-4 border border-[#dfdfdf] leading-[30px] rounded-xl"
              rows={4}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
            ></textarea>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="leading-7 text-sm font-bold">Services</label>
            <div className="flex gap-[37px] max-[393px]:flex-col max-[393px]:gap-[0px]">
              <div className="basis-[232px] flex flex-col gap-4 max-[393px]:basis-[0px]">
                <FormCheckbox id="Web Development" label="Web Development" value="Web Development" onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void} checked={formData.services.includes('Web Development')} />
                <FormCheckbox id="Mobile App Development" label="Mobile App Development" value="Mobile App Development" onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void} checked={formData.services.includes('Mobile App Development')} />
                <FormCheckbox id="UI/UX Design" label="UI/UX Design" value="UI/UX Design" onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void} checked={formData.services.includes('UI/UX Design')} />
              </div>
              <div className="basis-[232px] flex flex-col gap-4 max-[393px]:basis-[0px] max-[393px]:mt-4">
                <FormCheckbox id="Cloud Solutions" label="Cloud Solutions" value="Cloud Solutions" onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void} checked={formData.services.includes('Cloud Solutions')} />
                <FormCheckbox id="Software Development" label="Software Development" value="Software Development" onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void} checked={formData.services.includes('Software Development')} />
                <FormCheckbox id="Other" label="Other" value="Other" onChange={handleInputChange as (e: React.ChangeEvent<HTMLInputElement>) => void} checked={formData.services.includes('Other')} />
              </div>
            </div>
          </div>
        </div>
        <button
          id="sendBtn"
          type="submit"
          className="active:bg-blue-400 bg-[#ff623e] p-2 rounded-full leading-[30px] text-white font-bold cursor-pointer"
        >
          Send
        </button>
      </fieldset>
    </form>
  );
};

export default ContactUI;
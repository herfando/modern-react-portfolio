import { useState } from 'react';

// Definisikan tipe untuk data formulir
interface FormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
  services: [],
};

const useContact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };
  
  const resetForm = () => {
    setFormData(initialFormData);
  };

  return { formData, handleInputChange, resetForm };
};

export default useContact;
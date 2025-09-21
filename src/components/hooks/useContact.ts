import { useState } from 'react';

// Define the type for the form data. This ensures type safety throughout the hook.
interface FormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}

// Initial state for the form. Storing this outside the component prevents it from being
// recreated on every render, which is a minor performance optimization.
const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
  services: [],
};

// This custom hook centralizes the state and logic for the contact form.
// It's a great example of a React hook for managing component-specific behavior.
const useContact = () => {
    // `useState` manages the form's data. All form inputs are controlled by this state.
    const [formData, setFormData] = useState<FormData>(initialFormData);

    // This single handler function manages changes for all input types (text and checkboxes).
    // Using a single function for this purpose simplifies the form logic.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;

    // This conditional logic handles the specific case of a checkbox input.
    // It either adds the service value to the array or removes it based on the `checked` status.
    if (type === "checkbox") {
        setFormData((prevData) => ({
        ...prevData,
        services: checked
            ? [...prevData.services, value]
            : prevData.services.filter((service) => service !== value),
        }));
    } else {
        // This handles text and textarea inputs by updating the corresponding field in the state.
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
};

// A function to reset the form data to its initial empty state.
const resetForm = () => {
    setFormData(initialFormData);
};

    // The hook returns the form state and the functions needed to interact with it.
    // This makes the logic reusable and easy to integrate into any component that needs a contact form.
    return { formData, handleInputChange, resetForm };
};

export default useContact;
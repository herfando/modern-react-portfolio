import { useState } from "react";

// This is a custom React Hook. Its purpose is to encapsulate stateful logic
// that can be reused across different components, following the "separation of concerns" principle.
// It's a clean way to manage a boolean state for things like toggles, popups, or dropdowns.
export default function useToggle(initialValue: boolean = false) {
  // `useState` initializes and manages the boolean state. `initialValue` defaults to `false`.
  const [isOpen, setIsOpen] = useState(initialValue);
  
  // This function toggles the `isOpen` state, flipping it from true to false or vice versa.
  const toggle = () => setIsOpen(!isOpen);
  
  // This function specifically sets the `isOpen` state to `false`.
  const close = () => setIsOpen(false);

  // The hook returns an object containing the current state (`isOpen`) and the functions
  // to manipulate that state (`toggle` and `close`). This is a standard pattern for React Hooks.
  return { isOpen, toggle, close };
}
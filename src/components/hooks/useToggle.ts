// src/hooks/useToggle.ts
import { useState } from "react";

export default function useToggle(initialValue: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return { isOpen, toggle, close };
}

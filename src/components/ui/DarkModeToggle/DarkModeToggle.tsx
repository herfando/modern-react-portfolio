"use client";
import { useEffect, useState } from "react";

// This is a React component that provides a dark mode toggle button.
// which means it can use state and effects and interact with the browser's DOM.
export default function DarkModeToggle() {
  // `useState` manages the `darkMode` state. `true` means dark mode is active.
  const [darkMode, setDarkMode] = useState(false);

  // `useEffect` runs once when the component is first loaded (`[]`).
  // Its purpose is to check the user's system preferences or local storage setting.
  useEffect(() => {
    // `document.documentElement` gives access to the `<html>` element.
    // This is where Tailwind CSS typically looks for the `.dark` class to apply dark mode styles.
    const root = document.documentElement;

    // This checks for the user's preferred theme. It first checks `localStorage` for a user-saved preference.
    // If no preference is found, it falls back to checking the user's system preference using `window.matchMedia`.
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // If dark mode is preferred, it adds the "dark" class to the `<html>` element.
      root.classList.add("dark");
      setDarkMode(true);
    } else {
      // Otherwise, it removes the class and sets the state to `false`.
      root.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // This function handles the logic for toggling the dark mode.
  const toggleDarkMode = () => {
    const root = document.documentElement;

    if (darkMode) {
      // If the current mode is dark, remove the class and set `localStorage` to "light".
      root.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      // If the current mode is light, add the class and set `localStorage` to "dark".
      root.classList.add("dark");
      localStorage.theme = "dark";
    }

    // This updates the component's state, triggering a re-render to change the button's icon.
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-900 text-xl"
      // The `title` attribute provides a tooltip for accessibility.
      title="Toggle Dark Mode"
    >
      {/* This is a simple conditional rendering (`? :`) to display the sun or moon emoji
      based on the current `darkMode` state. */}
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}
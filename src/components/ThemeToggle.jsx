import React from "react";
import useThemeStore from "../store/useCalculatorStore";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-3 right-3 p-1 md:p-2 bg-dark-main-bg dark:bg-light-main-bg rounded-full text-black dark:text-white"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;

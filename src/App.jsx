import { React, useEffect } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import useCalculatorStore from "./store/useCalculatorStore";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const { theme } = useCalculatorStore();

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex justify-center items-center h-screen bg-light-main-bg dark:bg-dark-main-bg">
      <ThemeToggle />
      <Calculator />
    </div>
  );
};

export default App;

import { React, useEffect } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import useCalculatorStore from "./store/useCalculatorStore";
import ThemeToggle from "./components/ThemeToggle";
import Note from "./components/Note";

const App = () => {
  const { theme } = useCalculatorStore();

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex font-mono justify-center items-center min-h-screen bg-light-main-bg dark:bg-dark-main-bg">
      <ThemeToggle />
      <div className="flex flex-col justify-center items-center mt-[35px]">
        <Calculator />
        <Note />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import useCalculatorStore from "../store/useCalculatorStore";

const Display = () => {
  const displayValue = useCalculatorStore((state) => state.display);

  return (
    <div className="w-full bg-light-display-bg dark:bg-dark-display-bg text-black dark:text-white text-text-light dark:text-text-dark text-right text-3xl rounded-lg shadow-inner">
      <input
        type="text"
        value={displayValue}
        className="w-[100%] bg-transparent outline-none py-4 text-right px-2"
        readOnly
      />
    </div>
  );
};

export default Display;

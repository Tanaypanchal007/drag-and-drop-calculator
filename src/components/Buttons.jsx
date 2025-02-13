import useCalculatorStore from "../store/useCalculatorStore";

const Buttons = ({ label, color }) => {
  const { addValue, clearDisplay, evaluateExpression, removeLastCharacter } =
    useCalculatorStore();

  const handleClick = () => {
    if (label === "AC") {
      clearDisplay();
    } else if (label === "C") {
      removeLastCharacter();
    } else if (label === "=") {
      evaluateExpression();
    } else {
      addValue(label);
    }
  };

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className="w-full h-full text-2xl font-semibold rounded-lg transition-all text-white hover:opacity-80"
    >
      {label}
    </button>
  );
};

export default Buttons;

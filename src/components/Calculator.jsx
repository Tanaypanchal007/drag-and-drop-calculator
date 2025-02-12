import Button from "./Buttons";
import Display from "./Display";

const Calculator = () => {
  const buttons = [
    { label: "7", color: "#333333" },
    { label: "8", color: "#333333" },
    { label: "9", color: "#333333" },
    { label: "C", color: "#D4D4D2" },
    { label: "4", color: "#333333" },
    { label: "5", color: "#333333" },
    { label: "6", color: "#333333" },
    { label: "/", color: "#FF9500" },
    { label: "1", color: "#333333" },
    { label: "2", color: "#333333" },
    { label: "3", color: "#333333" },
    { label: "*", color: "#FF9500" },
    { label: "0", color: "#333333" },
    { label: ".", color: "#333333" },
    { label: "=", color: "#FF9500" },
    { label: "+", color: "#FF9500" },
    { label: "-", color: "#FF9500" },
  ];

  return (
    <div className="w-80 p-4 bg-[#3d3d3d] shadow-lg rounded-lg flex flex-col gap-4">
      <Display />
      <div className="grid grid-cols-4 gap-2 p-2 bg-[#1e1e1e] rounded-lg">
        {buttons.map((btn, index) => (
          <Button key={index} label={btn.label} color={btn.color} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

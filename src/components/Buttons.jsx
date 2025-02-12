const Button = ({ label, color, className }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={` p-4 text-2xl font-semibold rounded-lg transition-all text-white hover:opacity-80 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

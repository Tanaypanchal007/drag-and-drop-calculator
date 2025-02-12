const Button = ({ label, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="p-4 text-xl font-semibold rounded-lg transition-all text-white hover:opacity-80"
    >
      {label}
    </button>
  );
};

export default Button;

const Display = () => {
  return (
    <div className="w-full bg-[#1e1e1e] text-white text-right text-3xl rounded-lg shadow-inner">
      <input
        type="text"
        value="0"
        className="w-[100%] bg-transparent outline-none py-4 text-right px-2"
        readOnly
      />
    </div>
  );
};

export default Display;

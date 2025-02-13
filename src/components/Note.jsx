import React from "react";

const Note = () => {
  return (
    <div className="text-black dark:text-white mt-[20px] ">
      <p className="text-sm text-center md:text-lg xl:text-lg font-light">
        🌗 <span className="font-semibold">Light and Dark Theme</span> – Toggle
        between light and dark mode using the theme switch.
      </p>
      <p className="text-sm text-center md:text-lg xl:text-lg font-light">
        🖱️ <span className="font-semibold">Drag and Drop Buttons</span> –
        Customize the button layout by dragging and dropping buttons as needed
      </p>
    </div>
  );
};

export default Note;

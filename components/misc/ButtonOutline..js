import React from "react";

const ButtonOutline = ({ children, link }) => {
  return (
    <button onClick={link} className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-white text-white bg-black outline-none rounded-l-full rounded-r-full capitalize hover:bg-white hover:text-black transition-all hover:shadow-white ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;

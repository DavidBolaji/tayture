import React from "react";

interface IHeader {
  text: string;
}

const HeaderComponent: React.FC<IHeader> = ({ text }) => {
  return (
    <div id="bg" className="h-[10vh] relative w-full">
      <div id="filter">{/* <img src={img} alt={"header"} /> */}</div>
      <div className="absolute h-full top-2/4 md:mx-20 mx-5 z-20">
        <h3 className="text-5xl text-black font-extrabold">{text}</h3>
      </div>
    </div>
  );
};

export default HeaderComponent;

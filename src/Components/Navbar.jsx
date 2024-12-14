import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar() {
  const element = (props) => {
    return (
      <Link to={props.link} className=" cursor-pointer hover:text-logo-color h-full w-[17%] flex items-center justify-center">
        <p className="py-2 duration-100 ease-in-out hover:border-logo-color">
          {props.text}
        </p>
      </Link>
    );
  };
  return (
    <div className="w-full h-16 flex border-b-[3px] border-logo-color">
      <div className="w-1/2 h-full px-5">
        <Logo />
      </div>
      <div className="flex items-center justify-end w-1/2 h-full gap-10 px-5 text-xl font-medium">
        {element({text:'Learn', link:'/'})}
        {element({text:'Visualise', link:'/visualise'})}
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-16 text-2xl font-bold bg-gray-700">
      Copy Rights&nbsp;
      <Link
        to="https://github.com/nm-safran" className=" hover:text-logo-color">
        {" "}
        ©Safran
      </Link>
    </div>
  );
}

export default Footer;

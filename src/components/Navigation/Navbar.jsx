import React, { useContext, useRef } from "react";

import { Link } from "react-router-dom";
import { NavbarColorContext, NavbarContext } from "../../context/NavContexts";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [, setNavOpen] = useContext(NavbarContext);
  const [, ,] = useContext(NavbarColorContext);

  return (
    <div className="z-4 flex fixed top-0 w-full items-start justify-between">
      <div className="lg:p-5 p-2 ">
        <Link to="/">
          <div className="lg:w-36 w-24">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 60"
            >
              <path
                fill="white"
                d="M10 10 H35 C45 10 50 15 50 25 C50 32 46 36 40 38 V39 
           C46 41 52 45 52 53 C52 62 45 70 34 70 H10 Z 
           M65 10 H100 V20 H80 V30 H98 V40 H80 V60 H65 Z
           M115 10 H140 C148 10 150 16 150 22 V48 C150 54 148 60 140 60 H115 Z
           M125 20 V50 H135 C138 50 140 48 140 45 V25 C140 22 138 20 135 20 Z"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div
        onClick={() => {
          setNavOpen(true);
        }}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48"
      >
        <div
          ref={navGreenRef}
          className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
        ></div>
        <div className="relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5 cursor-pointer">
          <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
          <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-white z-50 w-[50%] fixed top-0 right-0 uppercase">
      <div className="w-full p-6">
        <ul className="flex justify-between w-full items-center text-[18px]">
          <img src="/logo.svg" alt="" />
          <li>à propos</li>
          <li>services</li>
          <li>témoignages</li>
          <li>clinique</li>
          <button className="bg-black rounded-md text-white font-[400] text-[20px] uppercase p-3">
            Consultation
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBarSM = ({ setContactOpen }) => {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    setOpen(false);
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:hidden relative w-full h-full py-6 px-6">
      <RxHamburgerMenu size={35} onClick={() => setOpen(true)} />
      <div
        className={`${
          open === false ? "left-[-500px]" : "left-0"
        } fixed text-white h-full w-[85%] top-0 grayscale duration-700 z-[70]`}
        style={{
          backgroundImage: 'url("/SideBarBG.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute h-full w-full bg-[#1D1D1D]/50"></div>
        <ul className="flex flex-col h-screen py-[50%] px-[20%] justify-between w-full items-start text-[20px] relative z-[80]">
          <img
            src="/logoBlack.png"
            alt=""
            className="h-[56px] w-[56px] lg:h-auto"
            onClick={() => setOpen(false)}
          />
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="focus:outline-none uppercase"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#services")}
              className="focus:outline-none uppercase"
            >
              services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#testimonials")}
              className="focus:outline-none uppercase"
            >
              témoignages
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#clinic")}
              className="focus:outline-none uppercase"
            >
              clinique
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarSM;

import React from "react";

const NavBar = ({ setContactOpen }) => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden md:flex bg-white z-50 w-[60%] lg:w-[50%] fixed top-0 right-0 uppercase">
      <div className="w-full p-6">
        <ul className="flex justify-between w-full items-center text-[9px] lg:text-[18px]">
          <img src="/logo.svg" alt="" className="h-10 w-auto lg:h-auto" />
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="focus:outline-none uppercase"
            >
              à propos
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
          <button
            onClick={() => setContactOpen(true)}
            className="bg-black rounded-md text-white font-[400] text-[10px] lg:text-[20px] uppercase p-3"
          >
            Consultation
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

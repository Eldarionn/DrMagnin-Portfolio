import React from "react";

const NavBar = () => {
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
    <div className="flex bg-white z-50 w-[50%] fixed top-0 right-0 uppercase">
      <div className="w-full p-6">
        <ul className="flex justify-between w-full items-center text-[18px]">
          <img src="/logo.svg" alt="" />
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="focus:outline-none"
            >
              à propos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#services")}
              className="focus:outline-none"
            >
              services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#testimonials")}
              className="focus:outline-none"
            >
              témoignages
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#clinic")}
              className="focus:outline-none"
            >
              clinique
            </button>
          </li>
          <button className="bg-black rounded-md text-white font-[400] text-[20px] uppercase p-3">
            Consultation
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

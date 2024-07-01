import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 4, duration: 2 }}
      className="hidden md:flex bg-white z-50 w-[50%] fixed top-0 right-0 uppercase"
    >
      <div className="w-full p-6">
        <ul className="flex justify-between w-full items-center font-raleway  md:text-[13px] lg:text-[18px]">
          <img src="/logo.svg" alt="" className="w-[50px] h-auto lg:w-auto" />
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
            className="bg-black rounded-md text-white font-[400] text-[15px] lg:text-[20px] uppercase px-3"
          >
            <span className="text-[30px] lg:text-[35px]">C</span>
            onsultation
          </button>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;

import React from "react";
import { motion } from "framer-motion";
import BG from "../../public/HeroBG.jpeg";
import { SlLocationPin } from "react-icons/sl";

const Hero = ({ setContactOpen }) => {
  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden">
      <div className="flex pb-[15%] md:py-[10%] lg:py-[20%] lg:auto lg:h-screen px-[15%] flex-col items-center md:items-start justify-center">
        <motion.h1
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-[25px] md:text-[30px] lg:text-[80px] font-[400] text-center md:text-start"
        >
          L'Art De la Beauté Révélée
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
        >
          <img
            src="/herotext.jpeg"
            alt=""
            className="h-[65px] md:h-[80px] lg:h-[180px] w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 2 }}
        >
          <button
            onClick={() => setContactOpen(true)}
            className="bg-black flex rounded-md text-white font-[400] text-[15px] md:text-[15px] lg:text-[20px] uppercase p-4"
          >
            <span className="hidden md:block">Réservez une </span> Consultation
          </button>
        </motion.div>
      </div>
      <div className="relative w-full overflow-hidden">
        <img src={BG} alt="bg" />
        <p className="bg-black/75 flex items-center gap-2 text-white px-4 py-3 rotate-90 absolute right-[-10%] lg:right-[-5%] top-1/2">
          Genève, Suisse
          <SlLocationPin className="rotate-180 h-4 w-auto" />
        </p>
      </div>
    </div>
  );
};

export default Hero;

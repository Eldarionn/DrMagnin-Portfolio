import React from "react";

import BG from "../../public/HeroBG.jpeg";

const Hero = ({ setContactOpen }) => {
  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden">
      <div className="flex py-[20%] lg:auto lg:h-screen px-[15%] flex-col items-center md:items-start justify-center">
        <h1 className="text-[25px] md:text-[30px] lg:text-[80px] font-[400] text-center md:text-start">
          L'Art De la Beauté Révélée
        </h1>
        <div>
          <img
            src="/herotext.jpeg"
            alt=""
            className="h-[65px] md:h-[80px] lg:h-[180px] w-auto"
          />
        </div>
        <div>
          <button
            onClick={() => setContactOpen(true)}
            className="bg-black rounded-md text-white font-[400] text-[15px] md:text-[15px] lg:text-[20px] uppercase p-4"
          >
            Réservez une Consultation
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <img src={BG} alt="bg" />
        <p className="bg-black text-white px-4 py-3 rotate-90 absolute right-[-5%] top-1/2">
          Genève, Suisse
        </p>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

import BG from "../../public/HeroBG.jpeg";

const Hero = ({ setContactOpen }) => {
  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      <div className="flex h-screen px-[15%] flex-col justify-center">
        <h1 className="text-[80px] font-[400]">L'Art De la Beauté Révélée</h1>
        <div>
          <img src="/herotext.jpeg" alt="" className="h-[180px] w-auto" />
        </div>
        <div>
          <button
            onClick={() => setContactOpen(true)}
            className="bg-black rounded-md text-white font-[400] text-[20px] uppercase p-4"
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

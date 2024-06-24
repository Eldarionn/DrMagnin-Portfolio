import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      <div className="flex h-screen px-[15%] flex-col justify-center">
        <h1 className="text-[80px] font-[400]">L'Art De la Beauté Révélée</h1>
        <div>
          <img
            src="/public/herotext.jpeg"
            alt=""
            className="h-[180px] w-auto"
          />
        </div>
        <div>
          <button className="bg-black rounded-md text-white font-[400] text-[20px] uppercase p-4">
            Réservez une Consultation
          </button>
        </div>
      </div>
      <div>
        <img src="/public/HeroBG.jpeg" alt="bg" />
      </div>
    </div>
  );
};

export default Hero;

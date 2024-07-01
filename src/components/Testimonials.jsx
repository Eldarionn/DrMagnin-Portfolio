import React from "react";

const Testimonials = ({ setContactOpen }) => {
  return (
    <div id="testimonials" className="hidden md:block pt-[15%]  z-10">
      <div className="w-[60%] mx-auto lg:p-10 text-center leading-[50px]">
        <p className="text-[20px] leading-[27px] md:leading-[40px] lg:leading-[65px] font-[100] lg:font-[400] md:text-[40px] lg:text-[50px]">
          Prenez le Premier Pas Vers Votre Transformation
        </p>
      </div>
      <p className="text-center w-[65%] mx-auto text-[10px] md:text-[20px] font-[100] lg:font-[400] lg:text-[25px] py-4  leading-[20px] md:leading-[35px] lg:leading-[50px] lg:py-2">
        Nous sommes enchantés de vous accueillir dans l'univers de la beauté
        redéfinie, orchestrée par le Dr Dominique Magnin. Chaque sourire, chaque
        émotion est une œuvre d'art en soi, et notre mission est de vous aider à
        les sublimer.  Inspiré par l'architecture et guidé par l'émotion, le Dr
        Magnin apporte une approche novatrice à la Médecine Esthétique.
      </p>
      <div className="grid grid-cols-4 gap-5 px-[5%]  py-10 h-[350px]">
        <div className="relative h-[350px] w-full overflow-hidden grayscale">
          <img
            src="/testimonials1.png"
            className="w-full h-full object-cover"
          />
          <p className="text-[20px] w-full px-[10%] text-center leading-[27px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            “Un grand merci pour le travail effectué! Vous avez une excellente
            lecture du visage et un "magic touch". Je vous recommande Dr Magnin”
          </p>
          <p className="text-[25px] font-[600] w-full px-[10%] text-center leading-[27px] text-white absolute bottom-[5%] left-1/2 -translate-x-1/2 ">
            Mayra F.
          </p>
        </div>
        <div className=" relative h-[350px] w-full overflow-hidden grayscale">
          <img
            src="/testimonials2.png"
            className="w-full h-full object-cover"
          />
          <p className="text-[20px] w-full px-[10%] text-center leading-[27px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            “He took a lot of time with me and seemed to have the passion and
            vision of an artist. I highly recommend Dr Magnin”{" "}
          </p>
          <p className="text-[25px] font-[600] w-full px-[10%] text-center leading-[27px] text-white absolute bottom-[5%] left-1/2 -translate-x-1/2 ">
            Noemi C.
          </p>
        </div>
        <div className="relative h-[350px] w-full overflow-hidden grayscale">
          <img
            src="/testimonials3.png"
            className="w-full h-full object-cover"
          />
          <p className="text-[20px] w-full px-[10%] text-center leading-[27px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            “Très bonne analyse du visage, le Dr. Magnin connaît son métier.
            Médecin compétant et surtout honnête.”{" "}
          </p>
          <p className="text-[25px] font-[600] w-full px-[10%] text-center leading-[27px] text-white absolute bottom-[5%] left-1/2 -translate-x-1/2 ">
            Millanyia O.
          </p>
        </div>
        <div className="relative h-[350px] w-full overflow-hidden grayscale">
          <img
            src="/testimonials4.png"
            className="w-full h-full object-cover"
          />
          <p className="text-[20px] w-full px-[10%] text-center leading-[27px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            “Amazing doctor. I came from London. Very professional. Will
            recommend the doctor over and over again!!”{" "}
          </p>
          <p className="text-[25px] font-[600] w-full px-[10%] text-center leading-[27px] text-white absolute bottom-[5%] left-1/2 -translate-x-1/2 ">
            Ivania A.
          </p>
        </div>
      </div>

      <div className="relative">
        <img src="/new/bg-line2.png" className="absolute top-0 left-0" />
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={() => setContactOpen(true)}
          className="bg-black rounded-md text-white font-[400] my-[10%] text-[15px] lg:text-[20px] uppercase px-3"
        >
          <span className="text-[30px] lg:text-[35px]">C</span>
          onsultation
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

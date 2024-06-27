import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesSM = () => {
  const [service2, setservice2] = useState(false);
  const [service3, setservice3] = useState(false);
  const [service4, setservice4] = useState(false);

  return (
    <div id="services" className="lg:hidden w-screen overflow-hidden">
      <div className="w-[60%] mx-auto lg:p-10 text-center leading-[50px] lg:border-[5px] border-red-600">
        <p className="text-[20px] leading-[27px] md:leading-[40px] lg:leading-[65px] md:text-[30px] lg:text-[50px]">
          Prenez le Premier Pas Vers Votre Transformation
        </p>
      </div>
      <p className="text-center w-[65%] mx-auto text-[10px] md:text-[17px] lg:text-[25px] py-4  leading-[20px] md:leading-[35px] lg:leading-[50px] lg:py-2">
        Nous sommes enchantés de vous accueillir dans l'univers de la beauté
        redéfinie, orchestrée par le Dr Dominique Magnin. Chaque sourire, chaque
        émotion est une œuvre d'art en soi, et notre mission est de vous aider à
        les sublimer.  Inspiré par l'architecture et guidé par l'émotion, le Dr
        Magnin apporte une approche novatrice à la Médecine Esthétique.
      </p>
      <div className="h-[550px] relative ">
        <div className={`absolute top-0 duration-700 right-0 h-full w-full`}>
          <div
            className="relative h-full w-full  overflow-hidden grayscale cursor-pointer group
              "
          >
            <img
              src="/testimonials1.png"
              className="w-full h-full object-cover duration-700"
            />
            <span className="bg-[#191919]/50 h-full w-full absolute top-0"></span>

            <div className="  absolute  text-center bottom-[5%] text-white text-[17px]  w-full  p-[5%] ">
              <p className="py-3 px-[10%] text-[10px] leading-[20px]">
                “Un grand merci pour le travail effectué! Vous avez une
                excellente lecture du visage et un "magic touch". Je vous
                recommande Dr Magnin”
              </p>
              <div className="flex items-center gap-[10%] w-full mx-auto justify-center">
                <img src="/Polygon 1 (2).svg" className="rotate-180 h-9" />
                <p>Mayra F.</p>

                <img
                  src="/Polygon 1 (2).svg"
                  alt=""
                  className="h-9"
                  onClick={() => setservice2(true)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 duration-700 ${
            service2 === false ? "right-[-400px]" : "right-0"
          } h-full w-full`}
        >
          <div
            className="relative h-full w-full  overflow-hidden grayscale cursor-pointer group
              "
          >
            <img
              src="/testimonials2.png"
              className="w-full h-full object-cover duration-700"
            />
            <span className="bg-[#191919]/50 h-full w-full absolute top-0"></span>

            <div className="  absolute  text-center bottom-[5%] text-white text-[17px]  w-full  p-[5%] ">
              <p className="py-3 px-[10%] text-[10px] leading-[20px]">
                “He took a lot of time with me and seemed to have the passion
                and vision of an artist. I highly recommend Dr Magnin”
              </p>
              <div className="flex items-center gap-[10%] w-full mx-auto justify-center">
                <img
                  src="/Polygon 1 (2).svg"
                  className="rotate-180 h-9"
                  onClick={() => setservice2(false)}
                />
                <p>Noemi C.</p>

                <img
                  src="/Polygon 1 (2).svg"
                  alt=""
                  className="h-9"
                  onClick={() => setservice3(true)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 duration-700 ${
            service3 === false ? "right-[-400px]" : "right-0"
          } h-full w-full`}
        >
          <div
            className="relative h-full w-full  overflow-hidden grayscale cursor-pointer group
              "
          >
            <img
              src="/testimonials3.png"
              className="w-full h-full object-cover duration-700"
            />
            <span className="bg-[#191919]/50 h-full w-full absolute top-0"></span>

            <div className="  absolute  text-center bottom-[5%] text-white text-[17px]  w-full  p-[5%] ">
              <p className="py-3 px-[10%] text-[10px] leading-[20px]">
                “Très bonne analyse du visage, le Dr. Magnin connaît son métier.
                Médecin compétant et surtout honnête.”
              </p>
              <div className="flex items-center gap-[10%] w-full mx-auto justify-center">
                <img
                  src="/Polygon 1 (2).svg"
                  className="rotate-180 h-9"
                  onClick={() => setservice3(false)}
                />
                <p>Millanyia O.</p>

                <img
                  src="/Polygon 1 (2).svg"
                  alt=""
                  className="h-9"
                  onClick={() => setservice4(true)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 duration-700 ${
            service4 === false ? "right-[-400px]" : "right-0"
          } h-full w-full`}
        >
          <div
            className="relative h-full w-full  overflow-hidden grayscale cursor-pointer group
              "
          >
            <img
              src="/testimonials4.png"
              className="w-full h-full object-cover duration-700"
            />
            <span className="bg-[#191919]/50 h-full w-full absolute top-0"></span>

            <div className="  absolute  text-center bottom-[5%] text-white text-[17px]  w-full  p-[5%] ">
              <p className="py-3 px-[10%] text-[10px] leading-[20px]">
                “Amazing doctor. I came from London. Very professional. Will
                recommend the doctor over and over again!!”
              </p>
              <div className="flex items-center gap-[10%] w-full mx-auto justify-center">
                <img
                  src="/Polygon 1 (2).svg"
                  className="rotate-180 h-9"
                  onClick={() => setservice4(false)}
                />
                <p>Ivania A.</p>

                <img src="/Polygon 1 (2).svg" alt="" className="h-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSM;

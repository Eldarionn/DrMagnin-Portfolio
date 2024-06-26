import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="px-[2%]">
      <h3 className="text-[50px] text-center">
        Obtenez des résultats harmonieux et naturels
      </h3>
      <div className="grid grid-cols-3 h-[800px]  overflow-hidden gap-5">
        <div className=" h-[800px] grid grid-rows-2 gap-5 ">
          <Link to="regard">
            <div
              className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 cursor-pointer group
"
            >
              <img
                src="/service1.png"
                className="w-full h-full object-cover group-hover:scale-105 duration-700"
              />
              <p className="absolute text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[40px] opacity-100 transition-opacity duration-700 group-hover:opacity-0 uppercase">
                Le Regard
              </p>
              <p className="absolute  text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[30px] flex w-full h-full p-[5%] opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex-col items-center justify-center">
                <span className="uppercase font-[600] underline pb-[5%]">
                  Le Regard
                </span>{" "}
                Explorez notre technique unique combinant d'acide hyaluronique
                et de Botox pour réveiller votre regard.{" "}
                <span className="uppercase underline pt-[5%]">
                  en savoir plus
                </span>
              </p>
            </div>
          </Link>
          <Link to="declat">
            <div className="relative h-full w-full overflow-hidden grayscale group hover:grayscale-0 cursor-pointer">
              <img
                src="/service2.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 duration-700"
              />
              <p className="absolute text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[40px] uppercase opacity-100 transition-opacity duration-700 group-hover:opacity-0">
                Coup D’eclat
              </p>
              <p className="absolute  text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[30px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex w-full h-full p-[5%] flex-col items-center justify-center">
                <span className="uppercase font-[600] underline pb-[5%]">
                  Coup D’eclat
                </span>
                Explorez nos traitements complets pour une peau rayonnante,
                incluant les skinboosters, la mésothérapie, les peelings et la
                cosmétologie.
                <span className="uppercase underline pt-[5%]">
                  en savoir plus
                </span>
              </p>
            </div>
          </Link>
        </div>
        <Link to="facelift">
          <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 cursor-pointer group">
            <img
              src="/service3.png"
              className="w-full h-full object-cover duration-700 group-hover:scale-105"
            />

            <p className="absolute  text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[30px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex w-full h-full p-[5%] flex-col items-center justify-end">
              <span className="uppercase font-[600] underline">Facelift</span>
              <br />
              Redéfinissez votre visage avec notre combinaison experte de
              méthodes de rajeunissement.
              <span className="uppercase underline">
                <br />
                en savoir plus
              </span>
            </p>
          </div>
        </Link>
        <div className=" h-[800px] grid grid-rows-2 gap-5 ">
          <Link to="levres">
            <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 cursor-pointer group">
              <img
                src="/service4.png"
                className="w-full h-full object-cover duration-700 group-hover:scale-105"
              />
              <p className="absolute text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[40px] uppercase opacity-100 transition-opacity duration-700 group-hover:opacity-0">
                Les Levres
              </p>

              <p className="absolute  text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[30px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex w-full h-full p-[5%] flex-col items-center justify-center">
                <span className="uppercase font-[600] underline pb-[5%]">
                  Les Levres
                </span>
                Découvrez notre approche minutieuse qui garantit des résultats
                repulpants et élégants pour des lèvres magnifiquement
                rehaussées.{" "}
                <span className="uppercase underline pt-[5%]">
                  en savoir plus
                </span>
              </p>
            </div>
          </Link>

          <Link to="hommes">
            <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 cursor-pointer group">
              <img
                src="/service5.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <p className="absolute text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[40px] uppercase transition-opacity duration-700 group-hover:opacity-0">
                Les Hommes
              </p>
              <p className="absolute text-center bottom-[5%] text-white left-1/2 -translate-x-1/2 text-[30px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 w-full h-full p-[5%] flex flex-col items-center justify-center">
                <span className="uppercase font-[600] underline pb-[5%]">
                  Les Hommes
                </span>
                Découvrez notre approche inclusive pour les hommes, où la
                médecine esthétique répond aux besoins spécifiques des hommes
                dynamiques.
                <span className="uppercase underline pt-[5%]">
                  en savoir plus
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

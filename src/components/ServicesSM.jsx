import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesSM = () => {
  const [service1, setservice1] = useState(false);
  const [service2, setservice2] = useState(false);
  const [service3, setservice3] = useState(false);
  const [service4, setservice4] = useState(false);
  const [service5, setservice5] = useState(false);

  return (
    <div id="services" className="lg:hidden w-screen overflow-hidden">
      <h3 className="text-[20px] leading-[27px] text-center">
        Obtenez des résultats harmonieux et naturels
      </h3>
      <div className="h-[550px] relative py-8">
        <div className={`absolute top-0 duration-700 right-0 h-full w-full`}>
          <div
            className="relative h-full w-full overflow-hidden grayscale cursor-pointer group
              "
          >
            <img
              src="/service1.png"
              className="w-full h-full object-cover duration-700"
            />

            <div className="flex absolute  text-center bottom-[5%] text-white text-[17px]  w-full h-full p-[5%]   items-end justify-center">
              <img src="/Polygon 1 (2).svg" className="rotate-180" />
              <Link to={"regard"}>
                <p className="flex flex-col">
                  <span className="uppercase font-[600] underline pb-[3%]">
                    Le Regard
                  </span>{" "}
                  Explorez notre technique unique combinant d'acide hyaluronique
                  et de Botox pour réveiller votre regard.{" "}
                  <span className="uppercase underline pt-[3%]">
                    en savoir plus
                  </span>
                </p>
              </Link>

              <img
                src="/Polygon 1 (2).svg"
                alt=""
                onClick={() => setservice2(true)}
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 duration-700 ${
            service2 === false ? "right-[-400px]" : "right-0"
          } h-full w-full`}
        >
          <div className="relative h-full w-full overflow-hidden grayscale  cursor-pointer">
            <img
              src="/service2.jpeg"
              className="w-full h-full object-coverduration-700"
            />

            <div className="flex absolute  text-center bottom-[5%] text-white text-[17px]  w-full h-full p-[5%]   items-end justify-center">
              <img
                src="/Polygon 1 (2).svg"
                className="rotate-180"
                onClick={() => setservice2(false)}
              />
              <Link to={"declat"}>
                <p className="flex flex-col">
                  <span className="uppercase font-[600] underline pb-[3%]">
                    Coup D’eclat
                  </span>
                  Explorez nos traitements complets pour une peau rayonnante,
                  incluant les skinboosters, la mésothérapie, les peelings et la
                  cosmétologie.
                  <span className="uppercase underline pt-[3%]">
                    en savoir plus
                  </span>
                </p>
              </Link>

              <img
                src="/Polygon 1 (2).svg"
                alt=""
                onClick={() => setservice3(true)}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 duration-700 ${
            service3 === false ? "right-[-400px]" : "right-0"
          } h-full w-full`}
        >
          <div className="relative h-full w-full overflow-hidden grayscale  cursor-pointer group">
            <img
              src="/service3.png"
              className="w-full h-full object-cover duration-700"
            />

            <div className="flex absolute  text-center bottom-[5%] text-white text-[17px]  w-full h-full p-[5%]   items-end justify-center">
              <img
                src="/Polygon 1 (2).svg"
                className="rotate-180"
                onClick={() => setservice3(false)}
              />

              <Link to={"facelift"}>
                <p className="flex flex-col">
                  <span className="uppercase font-[600] underline pb-[3%]">
                    Facelift
                  </span>
                  Redéfinissez votre visage avec notre combinaison experte de
                  méthodes de rajeunissement.
                  <span className="uppercase underline pt-[3%]">
                    en savoir plus
                  </span>
                </p>
              </Link>

              <img
                src="/Polygon 1 (2).svg"
                alt=""
                onClick={() => setservice4(true)}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 duration-700 ${
            service4 === false ? "right-[-400px]" : "right-0"
          } h-full w-full`}
        >
          <div className="relative h-full w-full overflow-hidden grayscale cursor-pointer group">
            <img
              src="/service4.png"
              className="w-full h-full object-cover duration-700"
            />

            <div className="flex absolute  text-center bottom-[5%] text-white text-[17px]  w-full h-full p-[5%]   items-end justify-center">
              <img
                src="/Polygon 1 (2).svg"
                className="rotate-180"
                onClick={() => setservice4(false)}
              />

              <Link to={"levres"}>
                <p className="flex flex-col">
                  <span className="uppercase font-[600] underline pb-[3%]">
                    Les Levres
                  </span>
                  Découvrez notre approche minutieuse qui garantit des résultats
                  repulpants et élégants pour des lèvres magnifiquement
                  rehaussées.
                  <span className="uppercase underline pt-[3%]">
                    en savoir plus
                  </span>
                </p>
              </Link>

              <img
                src="/Polygon 1 (2).svg"
                alt=""
                onClick={() => setservice5(true)}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 duration-700 ${
            service5 === false ? "right-[-400px]" : "right-0"
          } h-full w-full`}
        >
          <div className="relative h-full w-full overflow-hidden grayscale  cursor-pointer group">
            <img
              src="/service5.png"
              className="w-full h-full object-cover transition-transform duration-700"
            />

            <div className="flex absolute  text-center bottom-[5%] text-white text-[17px]  w-full h-full p-[5%]   items-end justify-center">
              <img
                src="/Polygon 1 (2).svg"
                className="rotate-180"
                onClick={() => setservice5(false)}
              />

              <Link to={"hommes"}>
                <p className="flex flex-col">
                  <span className="uppercase font-[600] underline pb-[3%]">
                    Les Hommes
                  </span>
                  Découvrez notre approche inclusive pour les hommes, où la
                  médecine esthétique répond aux besoins spécifiques des hommes
                  dynamiques.
                  <span className="uppercase underline pt-[3%]">
                    en savoir plus
                  </span>
                </p>
              </Link>

              <img src="/Polygon 1 (2).svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSM;

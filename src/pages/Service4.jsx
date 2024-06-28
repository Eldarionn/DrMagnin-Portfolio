import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Service4 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Scroll to top when the component mounts or updates
    scrollToTop();
  }, []);

  return (
    <>
      <div className=" lg:max-h-[900px] grid lg:grid-cols-2 lg:overflow-hidden">
        <div className="relative h-full w-full lg:overflow-hidden grayscale">
          <img src="/servicePage4.png" className="h-full w-full object-cover" />
          <Link to={"/"}>
            <img
              src="/Polygon 1 (2).svg"
              className="absolute left-[3%] top-[10%] lg:top-1/2 rotate-180"
            />
          </Link>
        </div>
        <div className="px-[5%] py-[7%]">
          <div className="flex flex-col lg:flex-row gap-[10%] items-start lg:items-center">
            <h1 className=" uppercase text-[20px] md:text-[30px] lg:text-[50px]">
              Le Levres
            </h1>
            <div className="">
              <button className="border-[3px] border-black my-4 lg:my-0 text-[15px] lg:text-[20px] uppercase py-3 px-4">
                consultation
              </button>
            </div>
          </div>

          <div>
            <p className="text-[20px] md:text-[25px] lg:text-[30px] py-5 leading-[33px] uppercase">
              Révélez les Joyaux de Votre Visage
            </p>
            <p className="text-[10px] lg:text-[18px] text-justify leading-[30px]">
              Nos résultats sont Remarquablement Naturels. Profitez d'un sourire
              éclatant qui attire les regards et les baisers grâce à nos
              avancées dans les techniques de comblement, offrant des lèvres
              Hydratées et Magnifiquement Repulpées.{" "}
            </p>
          </div>
          <div>
            <p className="text-[15px] md:text-[20px] lg:text-[30px] py-5 mt-5 uppercase">
              Les Avancées dans les Techniques de Comblement Offrent de
              Nouvelles Possibilités:
            </p>
            <p className="text-[10px] lg:text-[18px] text-justify leading-[30px]">
              <li>
                Redessinez le contour pour sublimer la définition et la ligne de
                vos lèvres.
              </li>
              <li>
                {" "}
                Redéfinissez le cœur de vos lèvres (arc de Cupidon) pour une
                allure captivante.
              </li>
              <li>
                Comblez les rides péribuccales (code barre) et les plis
                d'amertume pour une apparence rajeunie.
              </li>
              <li>
                {" "}
                Augmentez le volume de vos lèvres pour une symétrie parfaite.
              </li>
              <li>
                Traitez les commissures pour une expression positive et
                radieuse.
              </li>
            </p>
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2">
        <div className="bg-custom-gradient px-[5%] lg:px-[10%] flex flex-col gap-[5%] items-center justify-center py-[15%]">
          <div>
            <p className="text-[20px] md:text-[25px] lg:text-[30px] leading-[33px] text-center">
              Produits Haut de Gamme pour des Lèvres Sensuelles
            </p>
            <p className="text-[10px] lg:text-[18px] leading-[30px] text-justify p-5">
              Notre gamme de traitements inclut l'utilisation experte de l'acide
              hyaluronique, du botox et d'autres méthodes de pointe en médecine
              esthétique à Genève.
            </p>
          </div>

          <div>
            <p className="text-[15px] md:text-[20px] lg:text-[25px] leading-[33px] text-center">
              Utilisation de l'Acide Hyaluronique
            </p>
            <p className="text-[10px] lg:text-[18px] leading-[30px] text-justify p-5">
              Nous utilisons des produits tels que Restylane Kysse pour
              redéfinir le contour, augmenter le volume et réduire l'apparence
              des rides, vous offrant ainsi des lèvres pleines et naturellement
              pulpeuses.
            </p>
          </div>
          <div>
            <p className="text-[15px] md:text-[20px] lg:text-[25px] leading-[33px] text-center">
              Botox pour le Sourire 
            </p>
            <p className="text-[10px] lg:text-[18px] leading-[30px] text-justify p-5">
              Notre expertise en injections de toxine botulique (botox) permet
              de traiter les rides autour de la bouche et d'améliorer
              l'apparence de vos lèvres, créant ainsi un sourire radieux et
              séduisant.
            </p>
          </div>
        </div>
        <div className="h-[450px] lg:h-full w-full overflow-hidden">
          <img
            src="/servicePage42.png"
            className="grayscale h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Service4;

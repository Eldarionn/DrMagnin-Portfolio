import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Service2 = () => {
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
      <div className=" lg:max-h-[900px] grid lg:grid-cols-2 lg:o`verflow-hidden">
        <div className="relative h-full w-full lg:overflow-hidden grayscale">
          <img
            src="/servicePage2.jpeg"
            className="h-full w-full object-cover"
          />
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
              Coup D’eclat
            </h1>
            <div className="">
              <button className="border-[3px] border-black text-[15px] my-4 lg:my-0 lg:text-[20px] uppercase py-3 px-4">
                consultation
              </button>
            </div>
          </div>

          <div>
            <p className="text-[20px] md:text-[25px] lg:text-[30px] py-5 leading-[33px] uppercase">
              Révélez un Teint Radieux, Sublimez Votre Peau
            </p>
            <p className="text-[10px] lg:text-[18px] text-justify leading-[30px]">
              Votre peau peut perdre son éclat en raison de facteurs
              environnementaux et d'un style de vie qui influent sur son état
              (exposition au soleil, tabac, pollution). Avec le temps, la peau
              perd son élasticité et des ridules ainsi que des rides fines
              peuvent apparaître. Explorez nos Solutions de Rayonnement Facial
              pour obtenir un teint lumineux et une beauté intemporelle.
            </p>
          </div>
          <div>
            <p className="text-[15px] md:text-[20px] lg:text-[30px] py-5 mt-5 uppercase">
              Les Avancées dans les Techniques de Comblement Offrent de
              Nouvelles Possibilités:
            </p>
            <p className="text-[10px] lg:text-[18px] text-justify leading-[30px]">
              Redonnez de l'hydratation en profondeur à votre peau grâce à nos
              solutions de skinboosters, dont Restylane Eyelight Genève et
              Juvederm Volite. Ces traitements rendent la peau plus douce,
              lumineuse et éclatante. En seulement environ 30 minutes par
              session, vous pouvez conserver un éclat éblouissant avec 2 à 3
              sessions par an. Ces solutions sont recommandées dès l'âge de
              25-30 ans pour raviver la vitalité de la peau en cas de légère
              déshydratation, tout en prévenant le vieillissement cutané et en
              renforçant la tonicité.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2">
        <div className="bg-custom-gradient px-[5%] lg:px-[10%] flex flex-col gap-[5%] items-center justify-center">
          <div>
            <p className="text-[15px] md:text-[20px] lg:text-[25px] leading-[33px] text-center">
              La Mésothérapie : Votre Secret pour une Peau Radieuse et Jeune
            </p>
            <p className="text-[10px] lg:text-[18px] leading-[30px] text-justify p-5">
              Découvrez le secret des célébrités et de l'industrie pour une peau
              belle et rayonnante. La mésothérapie, souvent recommandée,
              améliore l'éclat. Ce traitement novateur combine des
              micro-injections riches en vitamines et en acide hyaluronique sous
              la surface de la peau, stimulant la production de collagène et
              améliorant l'élasticité, la pigmentation et la texture de la peau.
              Pour des résultats optimisés, la mésothérapie est souvent associée
              à des micropeelings personnalisés.{" "}
            </p>
          </div>

          <div>
            <p className="text-[15px] md:text-[20px] lg:text-[25px] leading-[33px] text-center">
              Révélez un Teint Éclatant avec nos Traitements de Peeling
            </p>
            <p className="text-[10px] lg:text-[18px] leading-[30px] text-justify p-5">
              Optez pour notre service de peelings pour obtenir une peau
              éclatante et renouvelée. Les peelings doux exfolient en douceur
              les couches superficielles de la peau, dévoilant un teint plus
              clair, plus lisse et plus lumineux. Chaque peeling est
              personnalisé par le Dr. Magnin en fonction de vos besoins
              spécifiques, avec des agents exfoliants adaptés à votre type de
              peau. Les résultats de nos peelings sur mesure sont remarquables,
              qu'il s'agisse d'atténuer les taches pigmentaires, de réduire les
              rides ou de raviver votre teint.
            </p>
          </div>
        </div>
        <img src="/servicePage22.png" alt="" />
      </div>
    </>
  );
};

export default Service2;

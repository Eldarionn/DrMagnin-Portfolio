import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BG from "../../public/servicePage32.png";
const Service3 = () => {
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
          <img src="/servicePage3.png" className="h-full w-full object-cover" />
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
              Facelift
            </h1>
            <div className="">
              <button className="border-[3px] border-black text-[15px] lg:text-[20px] uppercase py-3 px-4">
                consultation
              </button>
            </div>
          </div>

          <div>
            <p className="text-[20px] md:text-[25px] lg:text-[30px] py-5 leading-[33px] uppercase">
              L'Art de la Beauté Naturelle & Idéale
            </p>
            <p className="text-[10px] lg:text-[18px] text-justify leading-[30px]">
              Un rajeunissement complet du visage et de l’ovale peut être obtenu
              à l’aide de méthodes sures, non invasives, sans chirurgie pour un
              résultat naturel, rafraichi. Une apparence jeune, liftée est
              possible en moins d’une heure. <br />
              <br /> La pureté des contours, l’harmonie des proportions, la
              symétrie des moitiés, la mobilité discrète des pommettes,
              l’absence de zones d’ombre surajoutées en dynamique dessinent une
              projection idéale en trois dimensions de votre beauté naturelle.{" "}
              <span className="font-bold">Chaque visage est unique.</span>
            </p>
          </div>
          <div>
            <p className="text-[15px] md:text-[20px] lg:text-[30px] py-5 mt-5 uppercase">
              Réjuvénation Immédiate du Visage
            </p>
            <p className="text-[10px] lg:text-[18px] text-justify leading-[30px]">
              Les caractéristiques de jeunesse sont rétablies: formes
              redistribuées, peau plus lumineuse. Avec une infime quantité de
              produit injectée dans des points de redressement personnalisés
              rectifie formes et ombres, efface la fatigue et transcende
              l'émotion naturelle du visage. En moins d'une heure, le tiers
              moyen et inférieur du visage retrouve le triangle inversé de la
              beauté juvénile.
            </p>
          </div>
        </div>
      </div>
      <div
        className=" grayscale"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full lg:w-[50%] px-[5%] flex flex-col gap-[5%] items-center justify-center py-3 lg:py-[5%]">
          <p className="text-[20px] md:text-[25px] lg:text-[30px] leading-[33px] text-center">
            Produits Haut de Gamme des Résultats Exceptionnels 
          </p>
          <div className="mt-4 lg:mt-20 flex gap-[10%]">
            <p className="text-[10px] lg:text-[18px] leading-[30px] text-justify  px-5">
              Juvederm Volux, Voluma, 
              <br /> Volift, Volbella  
              <br /> HarmoniCA  
              <br /> Restylane Kysse, Restylane  
              <br /> Eyelight  
              <br /> Profhilo  
              <br /> Fils PDO / Aptos 
            </p>

            {/* <span className="border-l border-black h-[80%]"></span> */}

            <p className="text-[10px] lg:text-[18px] leading-[30px] border-l pl-[20%] border-black text-justify  px-5">
              POUR UNE BEAUTE <br /> INTEGRALE:{" "}
              <span className="font-raleway">
                <br /> • COU 
                <br /> • Décolleté 
                <br /> • Mains
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2">
        <div className="bg-[#A0A0A0] px-[5%] lg:px-[10%] text-white flex flex-col gap-[5%] items-center justify-center py-[15%]">
          <div>
            <p className="text-[20px] md:text-[25px] lg:text-[30px] leading-[33px] text-center uppercase">
              botox
            </p>
            <p className="text-[10px] lg:text-[18px] leading-[30px] text-center p-5">
              Dr. Dominique Magnin considère le visage dans sa globalité
              dynamique, allant au-delà des rides. Votre visage ne sera pas
              figé, mais dynamisé avec tonicité et jeunesse. En plus de procurer
              un aspect reposé et rafraîchi, un regard ouvert (yeux de chat) et
              une peau plus lisse, plus tendue et plus lumineuse contribuent à
              vous offrir une apparence juvénile.  Découvrez comment votre
              visage peut retrouver son dynamisme et sa fraîcheur naturelle avec
              notre approche experte en esthétique. A combination of methods are
              used including: cheek lift, jawline, Botox brow-lift &
              skin-tightening With safe, fully approved products with a long
              safety history
            </p>
          </div>
        </div>
        <div className="h-[450px] lg:h-full w-full overflow-hidden">
          <img
            src="/public/servicePage33.png"
            className="grayscale h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Service3;

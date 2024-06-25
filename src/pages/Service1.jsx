import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Service1 = () => {

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
    <div className="h-screen max-h-[900px] grid grid-cols-2">
      <div className="relative h-full w-full overflow-hidden grayscale">
        <img
          src="/public/servicePage1.png"
          className="h-full w-full object-cover"
        />
        <Link to={"/"}>
          <img
            src="/public/Polygon 1 (2).svg"
            className="absolute left-[3%] top-1/2 rotate-180"
          />
        </Link>
      </div>
      <div className="px-[5%] py-[7%]">
        <div className="flex gap-[10%] items-center">
          <h1 className=" uppercase text-[50px]">Le Regard</h1>
          <div className="">
            <button className="border-[3px] border-black text-[20px] uppercase py-3 px-4">
              consultation
            </button>
          </div>
        </div>

        <div>
          <p className="text-[30px] py-5 leading-[33px] uppercase">
            Source de Lumière et d'Expression
          </p>
          <p className="text-[18px] text-justify leading-[30px]">
            Vos yeux sont les fenêtres de votre âme, et le Dr. Dominique Magnin
            sait comment faire briller leur lumière. Révélez vos yeux et vos
            lèvres, véritables joyaux de votre visage, qui insufflent vie et
            éclat à votre expression. <br />
            <br /> Sa technique d'injections est précise et experte, reposant
            sur une combinaison minutieuse d'acide hyaluronique et de Botox
            soigneusement sélectionnés. Cette approche permet de révéler la
            beauté naturelle de votre regard et de lui insuffler une nouvelle
            vitalité. 
          </p>
        </div>
        <div>
          <p className="text-[30px] py-5 mt-5 uppercase">
            Réveillez et Rafraîchissez Votre Regard avec Médecine Esthétique à
            Genève
          </p>
          <p className="text-[18px] text-justify leading-[30px]">
            Avec notre expertise en médecine esthétique, nous pouvons ouvrir le
            regard et atténuer les signes de fatigue pour une apparence
            radieuse. La médecine esthétique devient ainsi un moyen d'expression
            pour vos yeux, créant une apparence rafraîchie et naturelle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service1;

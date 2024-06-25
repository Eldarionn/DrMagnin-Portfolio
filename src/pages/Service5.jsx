import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Service5 = () => {
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
    <div className=" max-h-[900px] grid grid-cols-2 overflow-hidden">
      <div className="relative h-full w-full overflow-hidden grayscale">
        <img
          src="/public/servicePage5.png"
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
          <h1 className=" uppercase text-[50px]">Les Hommes</h1>
          <div className="">
            <button className="border-[3px] border-black text-[20px] uppercase py-3 px-4">
              consultation
            </button>
          </div>
        </div>

        <div>
          <p className="text-[30px] py-5 leading-[33px] uppercase">
            Redéfinissez votre Traits Masculins
          </p>
          <p className="text-[18px] text-justify leading-[30px]">
            Les traitements esthétiques masculins offrent des solutions sur
            mesure pour redéfinir vos traits masculins. De la restauration du
            contour du visage au comblement des rides et des cernes, notre
            approche vise à créer une apparence rajeunie et revitalisée tout en
            préservant votre masculinité. <br /> <br /> Les cernes et le regard
            fatigué peuvent donner une impression de affaiblissement. Nos
            traitements ciblés, tels que la mésothérapie et les injections de
            botox masculin, peuvent rafraîchir votre regard et réduire les
            signes de fatigue, vous permettant ainsi de conserver une apparence
            alerte et énergique.
          </p>
        </div>
        <div>
          <p className="text-[30px] py-5 mt-5 uppercase">
            Médecine Esthétique Masculine à Genève
          </p>
          <p className="text-[18px] text-justify leading-[30px]">
            Notre équipe expérimentée en médecine esthétique masculine à Genève
            comprend les besoins spécifiques des hommes en matière de soins
            esthétiques. Nous sommes déterminés à vous offrir des traitements de
            haute qualité qui vous permettent de retrouver votre confiance et
            votre dynamisme. <br />
            <br /> Découvrez comment nos méthodes, y compris le lifting frontal
            masculin, peuvent vous aider à retrouver un visage énergisé et
            dynamique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service5;

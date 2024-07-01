import React, { useState } from "react";

const About = ({ setContactOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="about" className="py-[15%]  z-10 overflow-hidden">
      <div className="w-full lg:w-[70%] mx-auto p-10 text-center leading-[25px] lg:leading-[50px]">
        <p className="text-[20px] md:text-[30px] lg:text-[50px]">
          Que vous souhaitiez retrouver l'éclat de votre peau, redéfinir vos
          contours ou raviver vos émotions...
        </p>
        <p className="text-[10px] md:text-[18px] leading-[20px] lg:leading-[40px] py-3 md:py-8 lg:0 lg:text-[25px] font-[300] lg:px-[15%]">
          à travers des techniques avancées, notre clinique est l'endroit où
          l'art et la science se rejoignent pour vous offrir des résultats
          exceptionnels.
        </p>
      </div>
      <div className="relative">
        <img src="/new/bg-line1.png" className="absolute  top-48 left-0" />
      </div>
      <div className="relative lg:w-[90%] h-[400px] md:h-[600px] lg:h-[800px] my-6 mx-auto">
        <div
          className="z-30  gap-10  leading-[50px] flex justify-end text-start"
          style={{
            backgroundImage: 'url("/AboutBG1.png")',
            backgroundSize: "cover",
          }}
        >
          <div className=" lg:my-auto  w-full lg:w-[50%] h-[400px] md:h-[600px] lg:h-[800px]">
            <img
              src="/AboutUncle1.png"
              className="h-full w-auto object-cover z-10 lg:my-auto"
            />
          </div>

          <div className="h-[600px] lg:h-[800px] mt-[90%] md:mt-[50%] lg:mt-0 lg:w-[65%] z-20 flex flex-col justify-between lg:py-[8%]">
            <p className="leading-[23px] md:leading-[40px] lg:leading-[45px] text-[20px] md:text-[25px] lg:text-[30px] uppercase font-raleway">
              Rencontrez le Médecin Esthétique Dr Dominique Magnin 
            </p>
            <p className="text-[15px] lg:text-[20px] leading-[25px] md:leading-[30px] lg:leading-[35px] py-4 lg:py-0 uppercase font-raleway">
              Learn the rules like a pro so that you can break them like an
              artist
            </p>
            <p className="text-[10px] md:text-[13px] lg:text-[18px] leading-[20px] md:leading-[25px] lg:leading-[30px] font-raleway">
              J’ai cherché un terme qui traduirait au plus près ma vision
              personnelle de la Beauté. <br /> L’analogie avec l’architecture
              s’est imposée, car nous avons la même approche : harmonie des
              proportions, pureté des contours, symétrie. La Médecine Esthétique
              est un Art, l’Art de saisir les volumes sous la lumière, pour
              révéler votre beauté naturelle, l’émotion de votre présence. Quand
              l’Art suscite l’émotion, c’est que le Beau est atteint. <br />
              La technique innovante que j’utilise -appelée MD Codes- introduit
              le nouveau concept d’attributs émotionnels ,l’Esthétique
              Emotionnelle.
              <br />
              Comme « Architecte du Visage » ma philosophie est de{" "}
              <span className="font-bold">
                rajeunir sans transformer, d’embellir sans altérer ,de sublimer
                sans déséquilibrer.
              </span>
            </p>
            <div className="w-full  flex gap-10">
              <button
                onClick={() => setContactOpen(true)}
                className="bg-black rounded-md text-white font-[400] text-[15px] lg:text-[20px] uppercase px-3"
              >
                <span className="text-[30px] lg:text-[35px]">C</span>
                onsultation
              </button>
              <img
                src="/Polygon 1 (2).svg"
                alt=""
                className="cursor-pointer "
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full my-6 mx-auto top-[-3%] ${
            open === false ? "left-[3000px]" : "left-0"
          } z-40
          leading-[50px] h-full hidden lg:flex justify-end duration-700 text-start bg-[#F5F5F5]`}
        >
          <div className="w-[40%] px-[3%] flex flex-col justify-between py-[10%]">
            <p className="text-[25px] text-center leading-[30px] uppercase">
              Le Dr. Magnin révèle la beauté individuelle avec précision et
              créativité.
            </p>

            <p className="text-[18px] py-8 leading-[30px] text-justify font-raleway">
              Diplômé en Morpho-esthétique et médecine anti-âge de l'Université
              Paris 5 en 2009, le Dr. Dominique Magnin, médecin esthétique à
              Genève, recherche continuellement l'innovation en médecine
              esthétique. Ses formations prestigieuses incluent le Galderma
              Aesthetic Academy Masterclass à Zurich en juin 2015 et le Mauricio
              De Maio Tour, Allergan à Paris en 2016, où il a exploré le
              potentiel des techniques révolutionnaires MD Codes™. 
            </p>
            <div className="absolute bottom-[5%] w-[60%] flex items-end ">
              <img
                src="/Polygon 1 (1).svg"
                alt=""
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
          <div className=" grayscale bottom-0 w-[85%] h-[600px] lg:h-[800px] ">
            <img src="/About2.jpeg" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* small devices tab */}
        <div
          className={`absolute w-full  mx-auto top-[22%] ${
            open === false ? "left-[3000px]" : "left-0"
          } z-40
          leading-[50px] h-[600px] lg:hidden justify-end duration-700 text-start bg-[#F5F5F5]`}
        >
          <div className="relative grayscale top-0 w-full h-full">
            <img src="/About2.jpeg" className="h-full w-full object-cover" />
            <p className="text-[13px] px-[7%] absolute bottom-4 w-[60%] text-center leading-[15px] uppercase font-raleway">
              Le Dr. Magnin révèle la beauté individuelle avec précision et
              créativité. Il invite à découvrir la magie d'une beauté sculptée
              naturellement.
            </p>
          </div>
          <div className=""></div>
          <div className="w-full px-[13%] bg-white flex flex-col justify-between py-[5%]">
            <p className="text-[10px] py-8 leading-[15px] text-justify font-raleway">
              Diplômé en Morpho-esthétique et médecine anti-âge de l'Université
              Paris 5 en 2009, le Dr. Dominique Magnin, médecin esthétique à
              Genève, recherche continuellement l'innovation en médecine
              esthétique. Ses formations prestigieuses incluent le Galderma
              Aesthetic Academy Masterclass à Zurich en juin 2015 et le Mauricio
              De Maio Tour, Allergan à Paris en 2016, où il a exploré le
              potentiel des techniques révolutionnaires MD Codes™. 
            </p>
            <div className="h-[40px] w-full flex items-end justify-end ">
              <img
                src="/Polygon 1 (1).svg"
                alt=""
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

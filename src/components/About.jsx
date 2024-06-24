import React from "react";

const About = () => {
  return (
    <div className="py-[15%] px-[2%] z-10">
      <div className="w-[70%] mx-auto p-10 text-center leading-[50px] border-[5px] border-red-600">
        <p className="text-[50px]">
          Que vous souhaitiez retrouver l'éclat de votre peau, redéfinir vos
          contours ou raviver vos émotions...
        </p>
        <p className="text-[25px] font-[300]">
          à travers des techniques avancées, notre clinique est l'endroit où
          l'art et la science se rejoignent pour vous offrir des résultats
          exceptionnels.
        </p>
      </div>
      <div
        className="relative w-[90%] my-6 mx-auto p-10  leading-[50px] flex justify-end text-start"
        style={{
          backgroundImage: 'url("/public/AboutBG1.png")',
          backgroundSize: "cover",
        }}
      >
        <div className="absolute left-[-6%] top-0 border-[5px] border-red-600 p-6 w-[40%] h-full">
          <img src="/public/AboutUncle1.png" className="h-full w-full " />
        </div>
        <div className="w-[65%]">
          <p className="text-[30px] uppercase font-raleway">
            Rencontrez le Médecin Esthétique Dr Dominique Magnin 
          </p>
          <p className="text-[20px] uppercase font-raleway">
            Learn the rules like a pro so that you can break them like an artist
          </p>
          <p className="text-[18px] leading-[30px] font-raleway">
            J’ai cherché un terme qui traduirait au plus près ma vision
            personnelle de la Beauté. <br /> L’analogie avec l’architecture
            s’est imposée, car nous avons la même approche : harmonie des
            proportions, pureté des contours, symétrie. La Médecine Esthétique
            est un Art, l’Art de saisir les volumes sous la lumière, pour
            révéler votre beauté naturelle, l’émotion de votre présence. Quand
            l’Art suscite l’émotion, c’est que le Beau est atteint. <br />
            La technique innovante que j’utilise -appelée MD Codes- introduit le
            nouveau concept d’attributs émotionnels ,l’Esthétique Emotionnelle.
            <br />
            Comme « Architecte du Visage » ma philosophie est de{" "}
            <span className="font-bold">
              rajeunir sans transformer, d’embellir sans altérer ,de sublimer
              sans déséquilibrer.
            </span>
          </p>

          <button className="border-[3px] border-black px-2 my-6 py-1 rounded-[5px] uppercase">
            consultationnnm
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

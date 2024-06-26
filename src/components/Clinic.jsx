import React from "react";

const Clinic = () => {
  return (
    <div id="clinic" className="lg:px-[2%] z-10">
      <div
        className="relative w-full lg:w-[90%] my-6 mx-auto p-3 md:p-6 lg:p-10 leading-[30px] md:leading-[35px] lg:leading-[50px] flex justify-end text-start"
        style={{
          backgroundImage: 'url("/AboutBG1.png")',
          backgroundSize: "cover",
        }}
      >
        <div className="w-full pb-[15%]">
          <p className="text-[20px] md:text-[30px] lg:text-[50px] uppercase mx-[15%] text-center text-white ">
            Planifiez une consultation dans notre clinique
          </p>
          <p className="text-[10px] md:text-[15px] lg:text-[25px] leading-[15px] md:leading-[30px] lg:leading-[50px] uppercase my-1 mb-14 md:my-5 lg:my-10 w-[85%] mx-auto py-6 px-[7%] text-center text-white lg:border-[5px] border-red-600  ">
            Notre équipe dévouée à <span className="font-[600]">Genève</span>{" "}
            est là pour vous guider à chaque étape de votre voyage vers une
            apparence
            <span className="font-[600]">
              plus lumineuse, plus jeune et plus épanouie.
            </span>
          </p>
        </div>

        <div className="absolute bottom-[-45%] mx-[10%] md:mx-[20%] lg:mx-[23%] py-8 px-12  bg-black/60 backdrop-blur-lg border-[4px] border-white">
          <p className="text-center text-white leading-[20px] md:leading-[35px] lg:leading-[50px] text-[10px] md:text-[15px] lg:text-[25px] ">
            <span className="font-bold">Contact  </span>
            <br /> contact@drmagnin.com 
            <br /> +41 78 808 7111 com 
            <br /> <span className="font-bold"> Addresse com </span>
            <br />{" "}
            <span className="text-red-600">
              Rue Philippe-Plantamour 18/20, 1201 Genève  com 
            </span>
            <br />
            <span className="font-bold">Horaires com  d'ouvertures com </span>
            <br /> Lundi - Vendredi: 9:00 - 18:00 com 
            <br /> Samedi: 9:00 - 16:00  com 
            <br />
            Dimanche: Closed 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clinic;

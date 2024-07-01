import React from "react";

const Clinic = () => {
  return (
    <div id="clinic" className="md:px-[5%] lg:px-[2%] z-10">
      <div
        className="relative w-full lg:w-[90%] my-6 mx-auto p-3 md:p-6 lg:p-10 leading-[30px] md:leading-[35px] lg:leading-[50px] flex justify-end text-start"
        style={{
          backgroundImage: 'url("/new/bg-clinique.png")',
          backgroundSize: "cover",
        }}
      >
        <div className="w-full pb-[15%]">
          <p className="text-[20px] md:text-[30px] lg:text-[50px] mb-24  md:mt-0 uppercase mx-[15%] text-center text-white ">
            <span className="text-[35px] md:text-[45px] lg:text-[75px] ">
              P
            </span>
            lanifiez une consultation dans notre clinique
          </p>
          <p className="font-raleway hidden md:block text-[10px] md:text-[15px] lg:text-[25px] leading-[15px] md:leading-[30px] lg:leading-[50px] uppercase my-1 mb-14 md:mb-5 lg:mb-10 w-[85%] mx-auto py-6 px-[7%] text-center text-white">
            Notre équipe dévouée à{" "}
            <span className="fontBold font-raleway">Genève</span> est là pour
            vous guider à chaque étape de votre voyage vers une apparence
            <span className="fontBold font-raleway">
              {" "}
              plus lumineuse, plus jeune et plus épanouie.
            </span>
          </p>
        </div>

        <div className="absolute bottom-[-55%] md:bottom-[-45%] left-1/2 transform -translate-x-1/2 w-[80%] md:w-auto py-8 px-12  bg-black/60 backdrop-blur-lg border-[4px] border-white">
          <p className="text-center text-white leading-[20px] md:leading-[35px] lg:leading-[50px] text-[10px] md:text-[15px] lg:text-[25px] ">
            <span className="font-bold">Contact  </span>
            <br /> contact@drmagnin.com 
            <br /> +41 78 808 7111
            <br /> <span className="font-bold"> Addresse </span>
            <br />{" "}
            <span className="text-red-600">
              Rue Philippe-Plantamour 18/20, 1201 Genève
            </span>
            <br />
            <span className="font-bold">Horaires com  d'ouvertures </span>
            <br /> Lundi - Vendredi: 9:00 - 18:00 
            <br /> Samedi: 9:00 - 16:00 
            <br />
            Dimanche: Closed 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clinic;

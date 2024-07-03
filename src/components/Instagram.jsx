import React, { useEffect } from "react";

const Instagram = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-[50%] md:pt-[25%] lg:pt-[30%] ">
      <h1 className="text-[20px] mb-8 md:text-[30px] leading-[27px] lg:text-[50px] text-center">
        Suivez-nous sur Instagram
      </h1>
      {/* <img
        src="/Instagram.png"
        className=" w-full h-auto
      py-[6%] hidden md:block"
      /> */}
      <div
        className="elfsight-app-48e48d9c-896b-47b5-bb4e-34430f1b50eb"
        data-elfsight-app-lazy
      ></div>
      {/* <img
        src="/InstagramSM.png"
        className="
      py-[6%] md:hidden"
      /> */}
    </div>
  );
};

export default Instagram;

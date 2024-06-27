import React from "react";

const Instagram = () => {
  return (
    <div className="pt-[50%] lg:pt-[30%] ">
      <h1 className="text-[20px] md:text-[30px] leading-[27px] lg:text-[50px] text-center">
        Suivez-nous sur Instagram
      </h1>
      <img
        src="/Instagram.png"
        className="
      py-[6%] hidden md:block"
      />
      <img
        src="/InstagramSM.png"
        className="
      py-[6%] md:hidden"
      />
    </div>
  );
};

export default Instagram;

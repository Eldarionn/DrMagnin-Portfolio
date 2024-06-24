import React from "react";

const Services = () => {
  return (
    <div className="px-[2%]">
      <h3 className="text-[50px] text-center">
        Obtenez des résultats harmonieux et naturels
      </h3>
      <div className="grid grid-cols-3 h-[800px]  overflow-hidden gap-5">
        <div className=" h-[800px] grid grid-rows-2 gap-5 ">
          <div className="h-full w-full overflow-hidden">
            <img
              src="/public/service1.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full w-full overflow-hidden">
            <img
              src="/public/service2.jpeg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="h-full w-full overflow-hidden">
          <img
            src="/public/service3.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" h-[800px] grid grid-rows-2 gap-5 ">
          <div className="h-full w-full overflow-hidden">
            <img
              src="/public/service4.png"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-full w-full overflow-hidden">
            <img
              src="/public/service5.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

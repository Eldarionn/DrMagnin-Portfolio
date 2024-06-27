import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Clinic from "../components/Clinic";
import Instagram from "../components/Instagram";
import { RxCross1 } from "react-icons/rx";
import ServicesSM from "../components/ServicesSM";
import TestimonialsSM from "../components/TestimonialSM";

const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div>
      <div
        className={`fixed top-0 ${
          contactOpen === false ? "right-[-1500px]" : "right-0"
        }  duration-700 h-screen w-full lg:w-[50%] bg-white shadow-xl  flex flex-col items-center justify-center z-[60]`}
      >
        <div className="absolute top-5 left-5 cursor-pointer">
          <RxCross1
            className="h-8 w-8 lg:w-12 lg:h-12"
            onClick={() => setContactOpen(false)}
          />
        </div>
        <div>
          <img src="/logo.svg" className="mx-auto" alt="Logo" />
          <h3 className="uppercase text-[15px] md:text-[20px] lg:text-[25px] py-12">
            Contactez Nous
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 w-[80%]">
          <div className="space-y-5">
            <div>
              <p className="uppercase text-[10px] md:text-[15px] lg:text-[20px]">
                nom complet
              </p>
              <input
                type="text"
                id="name"
                className="pl-b md:pb-2 lg:pb-3 pl-1 md:pl-2 lg:pl-3 w-full border-l lg:border-l-[2px] outline-none my-3 border-black border-b lg:border-b-[2px]"
              />
            </div>
            <div>
              <p className="uppercase text-[10px] md:text-[15px] lg:text-[20px]">
                Email
              </p>
              <input
                type="email"
                id="email"
                className="pl-b md:pb-2 lg:pb-3 pl-1 md:pl-2 lg:pl-3 w-full border-l lg:border-l-[2px] outline-none my-3 border-black border-b lg:border-b-[2px]"
              />
            </div>
            <div>
              <p className="uppercase text-[10px] md:text-[15px] lg:text-[20px]">
                téléphone
              </p>
              <input
                type="number"
                id="telephone"
                className="pl-b md:pb-2 lg:pb-3 pl-1 md:pl-2 lg:pl-3 w-full border-l lg:border-l-[2px] outline-none mt-3 border-black border-b lg:border-b-[2px]"
              />
            </div>
          </div>
          <div>
            <p className="uppercase  text-[10px] md:text-[15px] lg:text-[20px]">
              Message
            </p>
            <textarea
              type="text"
              id="name"
              rows={8}
              className=" pl-1 md:pl-2 lg:pl-3  w-full border-l lg:border-l-[2px] pb-[5%] outline-none my-3 border-black border-b lg:border-b-[2px]"
            />
          </div>
        </div>
        <button className="bg-black text-white py-3 px-4 text-[15px] lg:text-[20px] rounded-[5px] mt-12">
          ENVOYER
        </button>
      </div>
      <NavBar setContactOpen={setContactOpen} />
      <Hero setContactOpen={setContactOpen} />
      <About setContactOpen={setContactOpen} />
      <Services />
      <ServicesSM />
      <Testimonials setContactOpen={setContactOpen} />
      <TestimonialsSM setContactOpen={setContactOpen} />
      <Clinic />
      <Instagram />
    </div>
  );
};

export default Home;

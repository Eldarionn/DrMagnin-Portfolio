import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Clinic from "../components/Clinic";
import Instagram from "../components/Instagram";
import { RxCross1 } from "react-icons/rx";

const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div>
      <div
        className={`fixed top-0 ${
          contactOpen === false ? "right-[-1500px]" : "right-0"
        }  duration-700 h-screen w-[50%] bg-white shadow-xl  flex flex-col items-center justify-center z-[60]`}
      >
        <div className="absolute top-5 left-5 cursor-pointer">
          <RxCross1 size={40} onClick={() => setContactOpen(false)} />
        </div>
        <div>
          <img src="/public/logo.svg" className="mx-auto" alt="Logo" />
          <h3 className="uppercase text-[25px] py-12">Contactez Nous</h3>
        </div>
        <div className="grid grid-cols-2 gap-8 w-[80%]">
          <div className="space-y-5">
            <div>
              <p className="uppercase text-[20px]">nom complet</p>
              <input
                type="text"
                id="name"
                className="pb-3 pl-3 w-full border-l-[2px] outline-none my-3 border-black border-b-[2px]"
              />
            </div>
            <div>
              <p className="uppercase text-[20px]">Email</p>
              <input
                type="email"
                id="email"
                className="pb-3 pl-3 w-full border-l-[2px] outline-none my-3 border-black border-b-[2px]"
              />
            </div>
            <div>
              <p className="uppercase text-[20px]">téléphone</p>
              <input
                type="number"
                id="telephone"
                className="pb-3 pl-3 w-full border-l-[2px] outline-none mt-3 border-black border-b-[2px]"
              />
            </div>
          </div>
          <div>
            <p className="uppercase  text-[20px]">Message</p>
            <textarea
              type="text"
              id="name"
              rows={10}
              className=" pl-3  w-full border-l-[2px] pb-[5%] outline-none my-3 border-black border-b-[2px]"
            />
          </div>
        </div>
      </div>
      <NavBar setContactOpen={setContactOpen} />
      <Hero setContactOpen={setContactOpen} />
      <About setContactOpen={setContactOpen} />
      <Services />
      <Testimonials setContactOpen={setContactOpen} />
      <Clinic />
      <Instagram />
    </div>
  );
};

export default Home;

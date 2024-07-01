import React from "react";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#A0A0A0] ">
      <div className="w-full md:w-[50%] py-[2%]">
        <p className="text-[20px] md:text-[27px] text-center md:text-start leading-[27px] lg:text-[35px] text-white mx-[2%] pt-24">
          “Learn the rules like a pro so you can break them like an artist.”
        </p>
        <img
          src="/Footer.png"
          className=" h-auto pt-24  mx-[2%] md:mt-12 lg:mt-24"
        />
      </div>
      <div className="hidden text-white pb-[5%] pl-[5%] items-end md:flex gap-3">
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLocationDot size={35} />
        </a>
        <a
          href="https://www.instagram.com/dr_magnin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={35} />
        </a>
        <a
          href="https://www.facebook.com/dr.magnin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={35} />
        </a>
        <a
          href="https://wa.me/41788087111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp size={35} />
        </a>
      </div>
      <div className="w-full px-[20%] md:px-0 md:w-[30%] items-end flex justify-center pb-[5%] ">
        <div className="text-white  ml-[2%] w-full  items-end text-[10px] md:text-[17px] lg:text-[25px] flex gap-3">
          <ul className="space-y-[15px] border-l px-[15%] border-white">
            <li>Facelift</li>
            <li>Les Levres </li>
            <li>Le Regard </li>
            <li>Coup D’eclat </li>
            <li>Les Hommes</li>
          </ul>
        </div>
        <div className="text-white  ml-[2%] w-full  items-end text-[10px] md:text-[17px] lg:text-[25px] flex gap-3">
          <ul className="space-y-[15px] border-l px-[15%] border-white">
            <li>A Propos </li>
            <li>Services </li>
            <li>Témoignages </li>
            <li>Clinique </li>
            <li> </li>
          </ul>
        </div>
      </div>
      <div className="flex text-white py-[10%] pl-[5%] items-end justify-center md:hidden gap-3">
        <FaLocationDot size={20} />
        <FaInstagram size={20} />
        <FaFacebookSquare size={20} />
        <IoLogoWhatsapp size={20} />
      </div>
    </div>
  );
};

export default Footer;

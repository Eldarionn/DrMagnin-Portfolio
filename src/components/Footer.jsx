import React from "react";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-[#A0A0A0] ">
      <div className="w-[50%] py-[2%]">
        <p className="text-[35px] text-white mx-[2%] pt-24">
          “Learn the rules like a pro so you can break them like an artist.”
        </p>
        <img
          src="/public/Footer.png"
          className=" h-auto pt-24 border-[5px] border-red-600 mx-[2%] mt-24"
        />
      </div>
      <div className="text-white pb-[5%] pl-[5%] items-end flex gap-3">
        <FaLocationDot size={35} />
        <FaInstagram size={35} />
        <FaFacebookSquare size={35} />
        <IoLogoWhatsapp size={35} />
      </div>
      <div className="text-white pb-[5%] ml-[2%] w-[15%]  items-end text-[25px] flex gap-3">
        <ul className="space-y-[15px] border-l px-[15%] border-white">
          <li>Facelift</li>
          <li>Les Levres </li>
          <li>Le Regard </li>
          <li>Coup D’eclat </li>
          <li>Les Hommes</li>
        </ul>
      </div>
      <div className="text-white pb-[5%] ml-[2%]  w-[15%] items-end text-[25px] flex gap-3">
        <ul className="space-y-[15px] border-l px-[15%] border-white">
          <li>A Propos </li>
          <li>Services </li>
          <li>Témoignages </li>
          <li>Clinique </li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect } from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Clinic from "../components/Clinic";
import Instagram from "../components/Instagram";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Clinic />
      <Instagram />
    </div>
  );
};

export default Home;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Service1 from "./pages/Service1";
import Home from "./pages/Home";
import Service5 from "./pages/Service5";
import Service2 from "./pages/Service2";
import Service4 from "./pages/Service4";
import Service3 from "./pages/Service3";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regard" element={<Service1 />} />
          <Route path="/declat" element={<Service2 />} />
          <Route path="/facelift" element={<Service3 />} />
          <Route path="/levres" element={<Service4 />} />
          <Route path="/hommes" element={<Service5 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

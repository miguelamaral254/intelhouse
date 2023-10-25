import React from "react";
// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      className="
    bg-site 
    bg-no-repeat 
    bg-cover 
    overflow-hidden"
    >
      <Nav />
      <Banner />
      <About />
      <Benefits />
      
      <Contact />
    </div>
  );
};

export default App;

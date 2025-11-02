import React from "react";
import Hero from "../../sections/MainPage/Hero/Hero";
import Benefits from "../../sections/MainPage/Benefits/Benefits";
import About from "../../sections/MainPage/About/About";
import Location from "../../sections/MainPage/Location/Location";

const Main: React.FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <About />
      <Location />
    </>
  );
};

export default Main;

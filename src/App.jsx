// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, offset: 100 });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
      <footer className="text-center py-3">
        <p className="text-center">Bhavesh Soni © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;

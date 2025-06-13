import React from "react";
import {
  Navbar,
  HeroComponent,
  Skill,
  Education,
  Project,
  Experience,
  Contact,
  Footer,
  About,
  TechnicalWriting,
  Research,
} from "./components/index";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <HeroComponent />
      <About />
      <Skill />
      <Experience />
      <Project />
      <TechnicalWriting />
      <Research />
      <Education />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;

// bg-gradient-to-t from-black/90 to-black/100

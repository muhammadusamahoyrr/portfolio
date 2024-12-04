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
} from "./components/index";
import StarField from "./three";
const App = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      <div>
        <Navbar />
      </div>
      <div className="bg-gradient-to-t from-black/90 to-black/100 ">
        <HeroComponent />
      </div>
      <Skill />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;

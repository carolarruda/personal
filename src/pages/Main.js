import NavBar from "@components/NavBar/NavBar";
import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Contact from "@components/Contact/Contact";
import Projects from "@components/myprojects/Projects";
import ParticleRing from "@components/Background/ParticleRing";

const Main = () => {
  return (
    <div className="main-grid">
      <NavBar />
      <ParticleRing />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;

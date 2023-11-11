import NavBar from "@components/NavBar/NavBar";
import Hero from "@components/LandingPage/Hero/Hero";
import About from "@components/LandingPage/About/About";
import Contact from "@components/Contact/Contact";
import Projects from "@components/LandingPage/myprojects/Projects";
import ParticleRing from "@components/LandingPage/Background/ParticleRing";

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

import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
import Contact from "../components/Contact/Contact";
import { useMediaQuery } from 'react-responsive'


const Main = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div className="main-grid">
      <NavBar />
      <Hero />
      <About />
      <ProjectsContainer />
      <Contact />
    </div>
  );
};

export default Main;

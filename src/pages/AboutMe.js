import AboutExpanded from "@components/AboutPage/AboutExpanded";
import NavBar from "@components/NavBar/NavBar";
import Contact from '@components/Contact/Contact'
import Hobbies from '@components/AboutPage/Hobbies'

const AboutMe = () => {
  return (
    <div className="main-grid">
      <NavBar />
      <AboutExpanded />
      <Hobbies/>
      <Contact/>
    </div>
  );
};

export default AboutMe;

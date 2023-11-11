import AboutExpanded from "@components/About/AboutExpanded";
import NavBar from "@components/NavBar/NavBar";
import Contact from '@components/Contact/Contact'
import Hobbies from '@components/About/Hobbies'

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

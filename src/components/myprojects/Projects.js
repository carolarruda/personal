import { Project } from "./Project";
import styles from "./projects.module.scss";

import carls from "../../images/Carls/Carls.png";
import movieDB from "../../images/MovieDB/VisualsDataBase.png";
import spot2 from "../../images/Spotify/Spot2.png";
import ecommerce from "../../images/ECommerce/EcommerceVisuals.png";

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Carls",
    imgSrc: carls,
    code: "https://github.com/carolarruda/carls",
    projectLink: "",
    tech: ["React", "MUI", "JS", "Express", "Node"],
    description:
      "Carls is a frontend interface serving as the gateway to a comprehensive recipe-sharing application",
    modalContent: (
      <>
        <p>
          Connected to a robust backend, this platform facilitates an enriching
          culinary journey for users, offering an extensive range of features to
          explore, create, modify, and delete personal recipes. Not only does it
          empower users to manage their recipes efficiently, but also share them
          within the platform&apos;s community.
        </p>
        <p>
          Leveraging React for its frontend, the application ensures an
          intuitive and responsive interface. Meanwhile, the backend relies on
          Node.js and Express, fostering a powerful connection between the
          frontend and the underlying database, which is implemented using
          Postgres,SQL. This architecture guarantees efficient data management,
          enabling users to interact with their recipes effortlessly.
        </p>
        <p>
          In essence, Carls combines modern technologies to provide a
          user-friendly, aesthetically pleasing, and functionally rich
          interface, allowing enthusiasts to not only curate their recipes but
          also share their culinary expertise within a online community.
        </p>
      </>
    ),
  },
  {
    title: "Movie Database",
    imgSrc: movieDB,
    code: "https://github.com/carolarruda/movieDb",
    projectLink: "",
    tech: ["Node", "Express", "Postgres", "Authentication"],
    description:
      "The Movie Database is a full-stack project designed to manage a collection of my favorite movies",
    modalContent: (
      <>
        <p>
        Created as a personal endeavor, the Movie Database is my go-to platform for cataloging the movies I&apos;m eager to watch or have enjoyed. It&apos;s more than just a movie catalog; it&apos;s a place to curate, organize, and cherish films close to my heart.
        </p>
        <p>
        Presently, I&apos;m focused on expanding the application&apos;s functionality. Upcoming updates will introduce enhanced features enabling users to filter movies by genre and ratings. Additionally, the project is undergoing development to integrate with the TMDb API, leveraging a vast database of movies to enrich the platform&apos;s offerings.
        </p>
      </>
    ),
  },
  {
    title: "Uomo E-commerce Website",
    imgSrc: ecommerce,
    code: "https://github.com/carolarruda/movieDb",
    projectLink: "",
    tech: ["React", "JS", "Framer Motion", "i18next"],
    description:
      "Frontend e-commerce website with a personalized chatbot, multilingual support, and an easy-to-use cart for seamless shopping.",
    modalContent: (
      <>
        <p>
          Uomo is a frontend project aimed at creating a beautiful interface for
          consumers.
        </p>
        <p>
          Providing a great shopping experience, the website includes a chatbot
          for personalized guidance, multilingual translations for a improved
          reach, and an intuitively designed cart for easy-to-use transactions.
        </p>
      </>
    ),
  },
  {
    title: "Spotify Clone",
    imgSrc: spot2,
    code: "https://github.com/carolarruda/movieDb",
    projectLink: "",
    tech: ["HTML", "CSS"],
    description:
      "A Spotify-inspired music streaming application replica, built using HTML and CSS, featuring full responsiveness across various devices.",
    modalContent: (
      <>
        <p>
          The Spotify Clone project is an HTML and CSS-based endeavor, aiming to
          replicate the well-known music streaming service.
        </p>
        <p>
          The project showcases a fully responsive design, allowing seamless
          user experiences across diverse devices and screen sizes. It seeks to
          mirror Spotify&apos;s intuitive interface and functionality, providing
          users with a familiar and accessible platform for music streaming.
        </p>
      </>
    ),
  },
];

export default Projects;

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
          Connected to a robust backend, this platform offers a culinary journey
          for its users, with a range of features to explore, create, modify, and
          delete personal recipes. Users are not only able to manage their
          recipes efficiently, but also share them within the platform&apos;s
          community.
        </p>
        <p>
          Leveraging React for its frontend, the application ensures an
          intuitive and responsive interface. The backend relies on Node.js and
          Express, fostering a powerful connection between the frontend and the
          underlying database, which is implemented using Postgres,SQL.
        </p>
        <p>
          In essence, Carls provides a user-friendly, aesthetically pleasing,
          and functionally rich interface, allowing enthusiasts to not only
          curate their recipes but also share their culinary expertise within a
          community.
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
          Created as a personal endeavor, the Movie Database is my go-to
          platform for cataloging the movies I&apos;m eager to watch or have
          enjoyed. It&apos;s more than just a movie catalog; it&apos;s a place
          to curate, organize, and cherish films close to my heart.
        </p>
        <p>
          Presently, I&apos;m focused on expanding the application&apos;s
          functionality. Upcoming updates will introduce enhanced features
          enabling users to filter movies by genre and ratings. Additionally,
          the project is undergoing development to integrate with the TMDb API,
          leveraging a vast database of movies to enrich the platform&apos;s
          offerings.
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
          Uomo is a collaborative frontend project with some of colleagues from
          Boolean UK. Our main focus was to create a user-friendly e-commerce
          website and sharpen our frontend skills.
        </p>

        <p>
          The website includes a chatbot for personalized guidance, multilingual
          translations for a improved reach, an intuitively designed cart for
          easy-to-use transactions, and caroussel of products to browse and an
          intuitive nav bar to search categories of products.
        </p>
        <p>
          In this project I have worked on the translations, the chatbot and add
          to cart to cart. I have also colaborated in implementing functionality
          for login and register feature using json-server-auth library.
        </p>
      </>
    ),
  },
  {
    title: "Spotify Clone",
    imgSrc: spot2,
    code: "https://github.com/carolarruda/html-spotify-challenge",
    projectLink:
      "https://html-spotify-challenge-gw0nn9vny-carolarruda.vercel.app/",
    tech: ["HTML", "CSS"],
    description:
      "A Spotify-inspired music streaming application replica, built using HTML and CSS, featuring full responsiveness across various devices.",
    modalContent: (
      <>
        <p>
          The Spotify Clone project is an HTML and CSS-based frontend project,
          aiming to replicate the music streaming service.
        </p>
        <p>
          The project showcases a fully responsive design, allowing seamless
          user experiences across diverse devices and screen sizes. It seeks to
          mirror Spotify&apos;s intuitive interface and responsivness.
        </p>
      </>
    ),
  },
];

export default Projects;

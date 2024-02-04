import { Project } from "./Project";
import classes from "./projects.module.scss";
import carls from "@images/Carls/Carls.png";
import movieDB from "@images/MovieDB/VisualsDataBase.png";
import spot2 from "@images/Spotify/Musify.png";
import ecommerce from "@images/ECommerce/EcommerceVisuals.png";
import ProjectBlob from "@components/blobs/ProjectBlob";
import SectionTitle from "@utils/SectionTitles/SectionTitle";

const Projects = () => {
  return (
    <div className={classes.sec}>
      <div className={classes.CS}>
        <ProjectBlob />
      </div>
      <section className="section-wrapper" id="projects">
        <SectionTitle title="Projects" dir="r" />
        <div className={classes.projects}>
          {projects.map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
      </section>
    </div>
  );
};

const projects = [
  {
    title: "Carls",
    imgSrc: carls,
    code: "https://github.com/carolarruda/carls",
    projectLink: "https://carls.vercel.app/",
    tech: ["React", "MUI", "JS", "Express", "Node"],
    description:
      "Carls is a a recipe social network that allows users to register, authenticate and share their recipes.",
    modalContent: (
      <>
        <p>
          Connected to a robust back-end, this platform offers a culinary
          journey for its users, with a range of features to explore, create,
          modify, and delete personal recipes. Users are able to both manage and
          share their recipes.
        </p>
        <p>
          The application&apos;s front-end is built with React, providing an
          intuitive and responsive interface. The back-end is powered by Node.js
          and Express, and it connects the front-end to a PostgreSQL database.
        </p>
        <p>
          In essence, Carls provides a user-friendly, aesthetically pleasing,
          and functional design, allowing foodies to curate their recipes and
          also share their culinary expertise.
        </p>
        <p>
          <span style={{ color: "var(--brand)", fontWeight: "600" }}>
            Test credentials for login:
          </span>{" "}
          Email - test@test.com and Password - Test1234?.
        </p>{" "}
      </>
    ),
  },
  {
    title: "Movie Database",
    imgSrc: movieDB,
    code: "https://github.com/carolarruda/MovieDB-FE",
    projectLink: "https://mymoviedatabase.vercel.app/",
    tech: ["Node", "Express", "MongoDB", "Authentication"],
    description:
      "The Movie Database is a full-stack project designed to manage a collection of my favorite movies",
    modalContent: (
      <>
        <p>
          The Movie Database is my personal platform for cataloging the movies
          I&apos;m eager to watch or have enjoyed. It&apos;s more than just a
          movie catalog; it&apos;s a place to organize, and cherish films close
          to my heart.
        </p>
        <p>
          Presently, I&apos;m focused on expanding the application&apos;s
          functionality. Upcoming updates will introduce enhanced features
          enabling users to filter movies by genre. Additionally, the project
          will undergo development to integrate with the TMDb API, leveraging a
          vast database of movies to enrich the platform&apos;s features and
          possibilities.
        </p>
        <p>
          <span style={{ color: "var(--brand)", fontWeight: "600" }}>
            Test credentials for login:
          </span>{" "}
          Email - test@test.com and Password - 1234.
        </p>{" "}
      </>
    ),
  },
  {
    title: "Uomo E-commerce Website",
    imgSrc: ecommerce,
    code: "https://github.com/desokan/ShopFront_Frontend",
    projectLink: "https://uomo-shopfront.vercel.app/",
    tech: ["React", "JS", "Framer Motion", "i18next", "Node"],
    description:
      "Full-stack e-commerce platform leveraging MERN stack. Featuring a chatbot, multilingual support, and an intuitive cart for seamless shopping experiences.",
    modalContent: (
      <>
        <p>
          Uomo is a full-stack project focused on creating a user-friendly and
          responsive e-commerce website.
        </p>
        <p>
          The website includes a chatbot for personalized guidance, multilingual
          translations for an improved reach, an intuitively designed cart, a
          caroussel of products to browse from and an intuitive nav bar to
          search products by categories.
        </p>
        <p>
          I have worked on the translations, the chatbot and add to
          cart and also built the back-end for the user
          management and subscriptions.
        </p>
        <p>
          <span style={{ color: "var(--brand)", fontWeight: "600" }}>
            Test credentials for login:
          </span>{" "}
          Email - test@test.com and Password - 1234.
        </p>{" "}
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
          The Spotify Clone project is an HTML and CSS-based front-end project,
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

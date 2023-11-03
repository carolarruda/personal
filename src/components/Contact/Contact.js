import classes from "./Contact.module.scss";
import * as React from "react";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={classes.contactSec}>
      <div className={classes.blobContainer}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#b8d0df"
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={classes.shapeFill}
          ></path>
        </svg>
      </div>
      <section className={`section-wrapper`} id="contact">
        <h4 className={classes.contactTitle}>
          Contact<span>.</span>
        </h4>
        
        <p className={classes.contactCopy}>
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/carolinacalouroarruda"
            target="_blank"
            rel="nofollow noreferrer"
          >
            Linkedin
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/carolarruda"
            target="_blank"
            rel="nofollow noreferrer"
          >
            GitHub
          </a>{" "}
        </p>
        <a href="mailto:carolinacalarruda@gmail.com">
          <div className={classes.contactEmail}>
            <AiFillMail size="2.2rem" />
            <span>carolinacalarruda@gmail.com</span>
          </div>
        </a>
     
          <div className={classes.contactEmail}>
            <AiFillLinkedin size="2.2rem" />
            <a href="https://www.linkedin.com/in/carolinacalouroarruda">
            <span>@carolinacalouroarruda</span>
            </a>
          </div>
  
        <a href="https://github.com/carolarruda">
          <div className={classes.contactEmail}>
            <AiFillGithub size="2.2rem" />
            <span>@carolarruda</span>
          </div>
        </a>


      </section>
    </div>
  );
};

export default Contact;

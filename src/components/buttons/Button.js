import classes from "./Button.module.scss";

const Button = ({ text, type, media }) => {
  console.log(media);
  return (
    <button
      onClick={() => {
        type === "projects"
          ? document.getElementById("projects")?.scrollIntoView()
          : window.open(
              "https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            );
      }}
      className={
        type === "projects"
          ? `${classes.btnViewProjects}`
          : `${classes.btnResume}`
      }
      id={media}
    >
      {text}
    </button>
  );
};

export default Button;

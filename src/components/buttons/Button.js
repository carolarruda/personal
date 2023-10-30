import classes from './Button.module.scss'

const Button = ({text, type}) => {
  return (
    <button
      onClick={() => {
        type === 'projects' ? document.getElementById("projects")?.scrollIntoView() :  window.open("https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic")}}
      className={classes.btnViewProjects}
    >
      {text}
    </button>
  );
};

export default Button

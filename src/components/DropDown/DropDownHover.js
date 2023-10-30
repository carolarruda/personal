import classes from "./DropDownHover.module.scss";


const DropDownHover = ({ category, subCategories }) => {
  return (
    <div className={classes.dropDownHover}>
      <a className={classes.dropbtn} to="/">
        {category}
      </a>
      <div className={classes.dropDownContent}>
        {subCategories.map((subCategory) => (
          <a
            to={subCategory.code}
            key={subCategory.title}
            className={classes.subCat}
          >
            {subCategory.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDownHover;
import { useEffect, useState } from "react";
import classes from "./Caroussel.module.scss";

const Caroussel = ({ blogs }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timer = null;
  useEffect(() => {
    timer =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3500);
  });

  const slideLeft = () => {
    setCurrent(current === 0 ? blogs.length - 1 : current - 1);
  };

  const slideRight = () => {
    setCurrent(current === blogs.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className={classes.carousselio}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timer);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className={classes.carousselWrapper}>
        {blogs.map((blog, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? `${classes.carousselCard} ${classes.carousselCardActive}`
                  : `${classes.carousselCard}`
              }
            >
              <img className={classes.blogImg} src={blog.image} alt="" />
   
            </div>
          );
        })}
        <div className={classes.carousselArrowLeft} onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className={classes.carousselArrowRight} onClick={slideRight}>
          &rsaquo;
        </div>
        <div className={classes.carousselPagination}>
          {blogs.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? `${classes.paginationDot} ${classes.paginationDotActive}`
                    : `${classes.paginationDot}`
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Caroussel;

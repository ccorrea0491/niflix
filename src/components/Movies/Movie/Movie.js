import React from "react";

import classes from "./Movie.module.css";

const movie = (props) => {
  return (
    <div
      id={props.id}
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/w780/${props.poster})`,
      }}
      onClick={props.selectMovie}
      className={classes.Movie}
    ></div>
  );
};

export default movie;

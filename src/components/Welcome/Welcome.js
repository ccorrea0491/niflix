import React from "react";

import classes from "./Welcome.module.css";
import Button from "../UI/Button/Button";

const welcome = (props) => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to right top, rgba(0,0,0,0.9), transparent), url(http://image.tmdb.org/t/p/w780/${props.poster})`,
      }}
      className={classes.Welcome}
    >
      <div className={classes.PrimaryContent}>
        <h1>{props.title}</h1>
        <div className={classes.PrimaryButtons}>
          <Button btnName="Play" />
          <Button btnName="Add to List" />
        </div>
        <p className={classes.Overview}>{props.overview}</p>
      </div>
    </section>
  );
};

export default welcome;

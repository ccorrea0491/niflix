import React from "react";

import classes from "./Navigation.module.css";

const navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
      </ul>
    </nav>
  );
};

export default navigation;

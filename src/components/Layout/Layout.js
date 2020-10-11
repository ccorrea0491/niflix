import React from "react";

import classes from "./Layout.module.css";
import Header from "./Header/Header";

const layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header search={props.search} />
      {props.children}
    </div>
  );
};

export default layout;

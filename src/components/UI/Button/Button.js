import React from "react";

import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.btnColor ? props.btnColor : "rgb(87, 86, 86)",
      }}
      className={classes.Button}
    >
      {props.btnName}
    </button>
  );
};

export default button;

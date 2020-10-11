import React from "react";

import classes from "./Modal.module.css";

const modal = (props) => {
  return props.show ? (
    <div className={classes.Modal}>{props.children}</div>
  ) : null;
};

export default modal;

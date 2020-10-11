import React from "react";

import classes from "./Header.module.css";
import Navigation from "../../Navigation/Navigation";
import Logo from "../../UI/Logo/Logo";
import { MdNotifications } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderLeft}>
        <Logo />
        <Navigation />
      </div>
      <div className={classes.HeaderRight}>
        <div className={classes.SearchBox}>
          <input
            onChange={props.search}
            name="search"
            type="text"
            placeholder="Search"
          />
        </div>

        <a className={classes.Notification}>
          <MdNotifications />
        </a>

        <a className={classes.User}>
          <FaUserAlt />
        </a>
      </div>
    </header>
  );
};

export default header;

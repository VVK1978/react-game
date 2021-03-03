import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./CSS/Navbar.module.css";

class NavBar extends Component {

  render() {
    return (
      <>
        <NavLink
          exact
          to="/"
          className={style.link}
          activeClassName={style.selected}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/newgame"
          className={style.link}
          activeClassName={style.selected}
        >
          Game
        </NavLink>
        <NavLink
          exact
          to="/options"
          className={style.link}
          activeClassName={style.selected}
        >
          Options
        </NavLink>
        <NavLink
          exact
          to="/contacts"
          className={style.link}
          activeClassName={style.selected}
        >
          Contacts
        </NavLink>
      </>
    );
  }
}

export default NavBar;

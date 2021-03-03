import React, { Component } from "react";
import style from "./CSS/Contacts.module.css";

export default class Contacts extends Component {
  render() {
    return (
      <>
        <wrapper className={style.wrapper}>
          <h1 className={style.contacts__title}>N U M B E R S : The Game</h1>
          <p className={style.contacts__content}>
            This is my first project in React JS...
          </p>
        </wrapper>
      </>
    );
  }
}

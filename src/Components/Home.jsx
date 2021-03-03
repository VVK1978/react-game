import React, { Component } from "react";
import { Container } from "react-bootstrap";
import style from "./CSS/Home.module.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container className={style.container}>
          <p className={style.game__name}>Numbers</p>
          <p className={style.the__game}>The Game</p>
        </Container>
      </>
    );
  }
}

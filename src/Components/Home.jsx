import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./CSS/Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container className="container">
          <p className="game__name">Numbers</p>
          <p className="the__game">The Game</p>
        </Container>
      </>
    );
  }
}

import React, { Component } from "react";
import style from "./CSS/FooterPage.module.css";
import { Navbar, Container } from "react-bootstrap";

class FooterPage extends Component {
  state = {
    levelGame: 0,
  };
  updateData = (value) => {
    this.setState({ levelGame: value });
  };
  render() {
    return (
      <>
        <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
          <Container>
            <a href="https://rs.school/index.html" className={style.link}>
              RS School React 2021Q1
            </a>
            <a href="https://github.com/VVK1978" className={style.link}>
              My GitHub
            </a>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default FooterPage;

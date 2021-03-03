import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo_rs from "./rs.svg";
import style from "./CSS/FooterPage.module.css";

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
                RS School 2021Q1
                <img src={logo_rs} alt="rs_logo" width="80" height="20" />
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

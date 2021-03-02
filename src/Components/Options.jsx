import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import style from "./CSS/Options.module.css";
import music from "./audio/1.mp3";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      levelGame: this.chooseLevel(),
      soundUrl: music,
      active: false,
    };
    this.audio = new Audio(this.state.soundUrl);
  }

  togglePlay = () => {
    this.setState(
      {
        play: !this.state.play,
        pause: !this.state.pause,
        active: !this.state.active,
      },
      () => {
        this.state.play ? this.audio.play() : this.audio.pause();
        console.log(this.state);
      }
    );
  };

  chooseLevel = () => {
    if (localStorage) {
      return localStorage.getItem("level");
    } else return 0;
  };

  handleChangeLevel = (event) => {
    this.setState({ levelGame: event.target.value });
    localStorage.setItem("level", event.target.value);
  };

  render() {
    let levels = { easy: 0, middle: 1, hard: 2 };

    return (
      <>
        <Container>
          <div className={style.game__options}>Game options</div>
          <Nav className={style.options}>
            <p className={style.sound}>Music</p>

            <button
              onClick={this.togglePlay}
              className={style.button}
              style={{
                backgroundColor: this.state.active === true ? "green" : "red",
              }}
            >
              {console.log(this.state)}

              {this.state.play ? "Music On" : "Music Off"}
            </button>

            <p className={style.skill}>Skill level</p>
            <select
              className={style.select}
              value={this.state.levelGame}
              onChange={this.handleChangeLevel}
            >
              <option value={levels.easy}>Easy</option>
              <option value={levels.middle}>Middle</option>
              <option value={levels.hard}>Hard</option>
            </select>
          </Nav>
        </Container>
      </>
    );
  }
}

import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import style from "./CSS/Options.module.css";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicValue: this.chooseMusicValue(),
      soundOn: this.chooseSoundOn(),
      levelGame: this.chooseLevel(),
      soundUrl: "./Components/audio/1.mp3",
    };
    this.audio = new Audio(this.state.soundUrl);
    console.log(this.audio);
  }

  componentDidUpdate() {
    this.audio.volume = this.state.musicValue;
  }

  chooseSoundOn = () => {
    if (localStorage.getItem("musicValue") > 0) {
      return localStorage.getItem("soundOn");
    } else {
      localStorage.setItem("soundOn", false);
      return false;
    }
  };

  chooseMusicValue = () => {
    if (localStorage.getItem("musicValue") != 0) {
      return localStorage.getItem("musicValue");
    } else {
      //this.setState({ soundOn: false });
      localStorage.setItem("soundOn", false);
    }

    return 0;
  };

  chooseLevel = () => {
    if (localStorage) {
      return localStorage.getItem("level");
    } else return 0;
  };

  handleChangeMusicLevel = (event) => {
    console.log("Изменяем уровень громкости");
    this.setState({ musicValue: event.target.value });
    localStorage.setItem("musicValue", event.target.value);
    if (localStorage.getItem("musicValue") == 0) {
      this.setState({ soundOn: false });
      localStorage.setItem("soundOn", false);
      this.pause();
      console.log("Звук отключен", this.audio.src);
    } else {
      this.play();
    }
  };

  handleChangeLevel = (event) => {
    this.setState({ levelGame: event.target.value });
    localStorage.setItem("level", event.target.value);
  };
  pause = () => {
    this.audio.volume = 0;
    this.audio.pause();
  };

  play = () => {
    this.audio.volume = this.state.musicValue;
    if (this.state.soundOn == false) {
      this.audio.play();
      this.setState({ soundOn: true });
      localStorage.setItem("soundOn", true);
    } else {
      this.setState({ soundOn: false });
      return;
    }
  };

  render() {
    let levels = { easy: 0, middle: 1, hard: 2 };
    let musicValue = {
      value_0: 0,
      value_25: 0.25,
      value_50: 0.5,
      value_75: 0.75,
      value_100: 1,
    };
    return (
      <>
        <Container>
          <div className={style.game__options}>Game options</div>
          <Nav className={style.options}>
            <p className={style.sound}>Music</p>
            <select
              className={style.select}
              value={this.state.musicValue}
              onChange={this.handleChangeMusicLevel}
            >
              <option value={musicValue.value_0}>Music Off</option>
              <option value={musicValue.value_25}>25%</option>
              <option value={musicValue.value_50}>50%</option>
              <option value={musicValue.value_75}>75%</option>
              <option value={musicValue.value_100}>100%</option>
              {console.log(this.state)}
            </select>

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

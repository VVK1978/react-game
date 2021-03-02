import React, { Component } from "react";
import style from "./CSS/Game.module.css";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import cardSet from "./CardsSet";

let level;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export default class Game extends Component {
  render() {
    if (!localStorage.getItem("level")) {
      level = 0;
    } else {
      level = localStorage.getItem("level");
    }
    console.log(level);
    let currentCardsSet = Object.values(cardSet)[level];
    let opacity = 1;
    shuffle(currentCardsSet);
    localStorage.setItem("cards", currentCardsSet);

    return (
      <>
        <div>
          <Cards name={currentCardsSet} current_opacity={opacity} />
        </div>
        <div className={style.button}>
          <Link to="/game" className={style.button__name}>
            Start The Game
          </Link>
        </div>
      </>
    );
  }
}

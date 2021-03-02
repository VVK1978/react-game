/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import style from "./CSS/Cards.module.css";
import cardSet from "./CardsSet";
import Cards from "./Cards";
import { Container } from "react-bootstrap";

let gameArray = []; // массив значений 2 карточек для сравнения
let gameCardId = []; // массив значени id 2 карточек для сравнения нажатия на разные карточки
let gameCount = 0; // количество ходов (максимально 2 хода - далее сравнение значений карточек)
let element_0;
let element_1;

export default class Game2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: localStorage.getItem("level"),
      cardSet: cardSet,
      count: 0,
      truePairs: 0,
      openCards: 12 + 6 * localStorage.getItem("level"), //количество открытых карточек для окончания игры (нач значение, конец игры=0)
      gameOver: "",
    };
  }

  handleClick = (event) => {
    event.target.classList.add(style.back);
    this.cardChange(event.target.id);
    let currentCount = this.state.count;
    currentCount++;
    this.setState({ count: currentCount });
    //console.log(this.state.count);
  };

  cardChange = (id) => {
    console.log(this.state.openCards);
    // Проверка на клик вне карточки
    if (id != "") {
      gameCardId.push(id);
      //console.log(gameCardId);
      gameArray.push(localStorage.getItem("cards").split(",")[id]);
      gameCount++;
      //Проверка на 2 клик по одной и той же карточке
      if (gameCount > 1 && gameCardId[0] == gameCardId[1]) {
        //console.log("Ошибка ввода");
        gameCardId.pop(id);
        gameArray.pop();
        gameCount--;
      } else {
        if (gameCount == 2) {
          //console.log("ввод верный");
          //Проверка на равно значений 2 открытых карточек и отрисовка не угадааных в красный цвет
          if (gameArray[0] != gameArray[1]) {
            //console.log("Вы не угадали");
            element_0 = document.getElementById(gameCardId[0]);
            element_1 = document.getElementById(gameCardId[1]);
            element_0.classList.add(style.bad);
            element_1.classList.add(style.bad);
            gameCount = 0;
            gameArray = [];
            gameCardId = [];
            let currentOpenCards = this.state.openCards;
            currentOpenCards -= 2;
            this.setState({ openCards: currentOpenCards });
            if (this.state.openCards == 2) {
              this.setState({ gameOver: "GAME OVER" });
            }
          } else {
            let currentTruePairs = this.state.truePairs;
            currentTruePairs++;
            this.setState({ truePairs: currentTruePairs });
            gameCount = 0;
            gameArray = [];
            gameCardId = [];
            let currentOpenCards = this.state.openCards;
            currentOpenCards -= 2;
            this.setState({ openCards: currentOpenCards });
            if (this.state.openCards == 2) {
              this.setState({ gameOver: "GAME OVER" });
            }
          }
        } else {
        }
      }
    }
  };

  render() {
    let currentCardsSet = Object.values(this.state.cardSet)[this.state.level];
    localStorage.setItem("cards", currentCardsSet);

    return (
      <>
        <div onClick={this.handleClick}>
          <Cards name={currentCardsSet} />
        </div>
        <div>
          <p className={style.statistic}>
            Ваши ходы - {this.state.count} Пар угадано- {this.state.truePairs}{" "}
            {this.state.gameOver}
          </p>
        </div>
      </>
    );
  }
}

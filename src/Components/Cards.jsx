/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./CSS/Cards.module.css";

function CurrentPlayCards(props) {
  return (
    <>
      <Col xs={4} md={2}>
        <div className={style.card}>
          <span
            className={style.card__number}
            id={props.id}
            style={{ opacity: props.current_opacity }}
          >
            {props.value}{" "}
          </span>
        </div>
      </Col>
    </>
  );
}

export default function Cards(props) {
  let currentPlayCard = props.name.map((item, index) => (
    <CurrentPlayCards
      key={index.toString()}
      value={item}
      id={index}
      current_opacity={props.current_opacity}
    />
  ));
  return (
    <>
      <Container>
        <Row>{currentPlayCard}</Row>
      </Container>
    </>
  );
}

import Header from "./Components/Header";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Game2 from "./Components/Game2";
import Options from "./Components/Options";
import Contacts from "./Components/Contacts";
import LogIn from "./Components/Login";
import FooterPage from "./Components/FooterPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Redirect />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newgame" component={Game} />
            <Route path="/options" component={Options} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/logIn" component={LogIn} />
            <Route path="/game" component={Game2} />
          </Switch>
          <FooterPage />
        </Router>
      </>
    );
  }
}
export default App;

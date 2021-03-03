import Header from "./Components/Header";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Game2 from "./Components/Game2";
import Options from "./Components/Options";
import Contacts from "./Components/Contacts";
import LogIn from "./Components/Login";
import FooterPage from "./Components/FooterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact path="/newgame" component={Game} />
            <Route exact path="/options" component={Options} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/logIn" component={LogIn} />
            <Route exact path="/game" component={Game2} />
          </Switch>
          <FooterPage />
        </Router>
      </>
    );
  }
}
export default App;

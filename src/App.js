import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "components/Login";
import MainPage from "pages/MainPage";
import "bootstrap/dist/css/bootstrap.css";
import "styles/main.scss";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default App;

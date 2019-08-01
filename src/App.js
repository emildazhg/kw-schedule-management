import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "components/Login";
import MainPage from "pages/MainPage";
// import Moment from "moment";
// import momentLocalizer from "react-widgets-moment";
// import DateTimePicker from "react-widgets/lib/DateTimePicker";
import "bootstrap/dist/css/bootstrap.css";
import "styles/main.scss";

// Moment.locale("en");
// momentLocalizer();

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

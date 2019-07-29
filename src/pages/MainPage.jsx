import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import Schedule from "components/Schedule";
import Todo from "components/Todo";
import DailyQuotes from "components/DailyQuotes";
import GratitudeBoard from "components/GratitudeBoard";

class MainPage extends Component {
  state = {
    status: {
      sidebar: "",
      content: "main-body"
    }
  };

  handleToggle = () => {
    const status = {
      sidebar: this.state.status.sidebar === "" ? "__small" : "",
      content:
        this.state.status.content === "main-body"
          ? "main-body-expand"
          : "main-body"
    };
    this.setState({ status });
  };
  render() {
    const { sidebar, content } = this.state.status;
    return (
      <div className="main">
        <Sidebar status={sidebar} handleToggle={this.handleToggle} />
        <Navbar />
        <div className={content}>
          <Switch>
            <Route path="/schedule" component={Schedule} />
            <Route path="/todo-list" component={Todo} />
            <Route path="/daily-quotes" component={DailyQuotes} />
            <Route path="/gratitude-board" component={GratitudeBoard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "components/common/sidebar/Sidebar";
import Navbar from "components/common/navbar/Navbar";
import EventForm from "components/pages/schedule/EventForm";
import GratitudeBoard from "pages/GratitudePage";
import DailyQuotes from "pages/DailyQuotesPage";
import Schedule from "pages/SchedulePage";
import Todo from "pages/TodoPage";
import history from "utils/history";

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
          <Switch history={history}>
            <Route path="/schedule" exact component={Schedule} />
            <Route path="/schedule/add" exact component={EventForm} />
            <Route path="/schedule/:id/edit" exact component={EventForm} />
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

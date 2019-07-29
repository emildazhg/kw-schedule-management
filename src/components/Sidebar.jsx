import React, { Component } from "react";
import SidebarList from "./SidebarList";

class Sidebar extends Component {
  state = {
    active: "",
    sidebars: [
      {
        id: 1,
        name: "Schedule Board",
        icon: "calendar",
        link: "/schedule"
      },
      {
        id: 2,
        name: "To-do List",
        icon: "list-ul",
        link: "/todo-list"
      },
      {
        id: 3,
        name: "Daily Quotes",
        icon: "quote-right",
        link: "/daily-quotes"
      },
      {
        id: 4,
        name: "Gratitude Board",
        icon: "heart",
        link: "/gratitude-board"
      }
    ]
  };

  handleActiveClass = value => {
    this.setState({ active: value });
  };

  isActive = value => {
    return value === this.state.active ? "active" : "";
  };

  render() {
    const { sidebars } = this.state;
    const { handleActiveClass, isActive, props } = this;
    const { handleToggle, status } = props;
    return (
      <div className={`sidebar${status}`}>
        <div className={`sidebar${status}__header`}>
          <h3>Click Sch</h3>
          <span className="sidebar__icon" onClick={handleToggle}>
            &#9776;
          </span>
        </div>
        {sidebars.map(sidebar => (
          <SidebarList
            key={sidebar.id}
            isActive={isActive}
            handleActiveClass={handleActiveClass}
            sidebar={sidebar}
            status={status}
          />
        ))}

        <div className={`sidebar${status}__footer`}>
          "Mindset is what seperate the <span>BEST</span> from the
          <span> REST</span>"
        </div>
      </div>
    );
  }
}

export default Sidebar;

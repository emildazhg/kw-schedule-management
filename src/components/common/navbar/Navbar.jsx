import React, { Component } from "react";
import UserStatus from "components/common/user/UserStatus";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="searchbar">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
        <div className="navbar__right">
          <div className="fa fa-bell-o" />
          <UserStatus />
          <div className="fa fa-cog" />
        </div>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import User from "components/User";

class Navbar extends Component {
  state = {
    profileVisible: false,
    notification: false,
    imageUlr: "profile-back.jpg"
  };

  handleProfileDropDown = () => {
    this.setState({ profileVisible: !this.state.profileVisible });
  };

  renderActive = value => {
    return value ? "navActive" : "";
  };

  render() {
    const { handleProfileDropDown, renderActive } = this;
    const { profileVisible, imageUlr } = this.state;

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
          <div
            className={`user-profile ${renderActive(profileVisible)}`}
            onClick={handleProfileDropDown}
          >
            Hi, Emilda <img src={imageUlr} alt="profile-pic" />
          </div>
          {profileVisible && <User imageUlr={imageUlr} />}

          <div className="fa fa-cog" />
        </div>
      </div>
    );
  }
}

export default Navbar;

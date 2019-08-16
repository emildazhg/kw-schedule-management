import React from "react";
import ReactDOM from "react-dom";

const User = ({ handleSignOut, profile: { Paa, ig, U3 } }) => {
  return ReactDOM.createPortal(
    <div className="user">
      <div className="user__header">
        <img src={Paa} alt="profile-pic" />
        <div className="user__header__name">{ig}</div>
        <div className="user__header__email">{U3}</div>
      </div>
      <div className="user__body">
        <div className="user__body__item">
          <i className="fa fa-user-md" />
          My Profile
        </div>
        <div className="user__body__item">
          <i className="fa fa-tasks" />
          My Task
        </div>
        <div className="user__body__item">
          <i className="fa fa-cog" />
          Settings
        </div>
      </div>
      <div className="user__footer">
        <div className="button button-signout" onClick={handleSignOut}>
          Sign Out
        </div>
      </div>
    </div>,
    document.body
  );
};

export default User;

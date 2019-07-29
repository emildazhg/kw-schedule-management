import React from "react";
import ReactDOM from "react-dom";

const User = ({ imageUlr, profileRef }) => {
  return ReactDOM.createPortal(
    <div className="user">
      <div className="user__header">
        <img src={imageUlr} alt="profile-pic" />
        <div className="user__header__name">Emilda</div>
        <div className="user__header__position">Learner & Doer</div>
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
        <div className="button button-signout"> Sign Out</div>
      </div>
    </div>,
    document.body
  );
};

export default User;

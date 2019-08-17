import React, { Component } from "react";
import { connect } from "react-redux";
import User from "components/common/user/User";
import { signIn, signOut } from "redux/action/authAction";

class UserStatus extends Component {
  state = {
    profileVisible: false,
    notification: false,
    imageUlr: "profile-back.jpg"
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1058754899746-vuuhqk14j6etg788b67jjj9jf41kpa9a.apps.googleusercontent.com",
          scope: "profile"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.handleAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.handleAuthChange);
        });
    });
  }

  handleAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getBasicProfile())
      : this.props.signOut();
  };

  handleProfileDropDown = () => {
    this.setState({ profileVisible: !this.state.profileVisible });
  };

  renderActiveClass = value => {
    return value ? "navActive" : "";
  };

  handleSignIn = () => {
    this.auth.signIn();
  };

  handleSignOut = () => {
    this.auth.signOut();
  };

  renderUserStatus() {
    const { isSignedIn, profile } = this.props;
    const { profileVisible } = this.state;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <div
          className={`user-profile ${this.renderActiveClass(profileVisible)}`}
          onClick={this.handleProfileDropDown}
        >
          Hi, {profile.ofa}
          <img src={profile.Paa} alt="profile-pic" />
          {profileVisible && (
            <User handleSignOut={this.handleSignOut} profile={profile} />
          )}
        </div>
      );
    } else {
      return (
        <div className="button button-sign-in" onClick={this.handleSignIn}>
          Sign In
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderUserStatus()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    profile: state.auth.profile
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(UserStatus);

import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../Actions";

class GoogleAuth extends React.Component {
  
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "45553561206-djape5c62ofjqp81645ttn9eml61foum.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streaming",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(()=>{this.onAuthChange(this.auth.isSignedIn.get())});
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    // console.log(this.auth.currentUser.get().getId())
   if(isSignedIn){
    this.props.signIn(this.auth.currentUser.get().getId());
   }else{
    this.props.signOut();
   }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) return null;
    if (this.props.isSignedIn)
      return (
        <button
          onClick={this.onSignOutClick}
          type="button"
          className="btn btn-danger"
        >
          <i className="bi bi-google"></i> SignOut
        </button>
      );
    if (!this.props.isSignedIn)
      return (
        <button
          onClick={this.onSignInClick}
          type="button"
          className="btn btn-success"
        >
          <i className="bi bi-google"></i> SignIn With Google
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(
  GoogleAuth
);

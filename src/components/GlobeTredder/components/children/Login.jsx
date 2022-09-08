// react import
import React from "react";
// 'Login' child component [stateless functional]
const Login = (props) => {
  return (
    <div id="login" className="page">
      {(props.credentials === false) & (props.signup === false) ? (
        <div id="login-banner">
          <span>
            <i id="banner-icon" className="fas fa-globe-americas"></i>
            GlobeTredder
          </span>
          <br />
          <button
            id="login-btn"
            className="btn btn-success"
            type="button"
            onClick={props.loginToggle}
          >
            Login
          </button>
          <br />
          <a id="signup-link" href="##" onClick={props.signupToggle}>
            No Account? Sign Up Here!
          </a>
        </div>
      ) : props.credentials === true && props.signup === false ? (
        <div id="login-card">
          <span id="login-back-arrow" onClick={props.loginToggle}>
            <i className="fa fa-arrow-circle-left"></i> Back
          </span>
          <br />
          <br />
          <span id="login-card-hdr">Login Credentials</span>
          <input id="login-user" type="text" placeholder="Username" required />
          <br />
          <input
            id="login-pass"
            type="password"
            placeholder="Password"
            required
          />
          <br />
          <div id="alert"></div>
          <button
            id="sign-in-btn"
            className="btn btn-success"
            type="button"
            onClick={props.signIn}
          >
            Sign In
          </button>
        </div>
      ) : props.credentials === false && props.signup === true ? (
        <div id="signup-card">
          <span id="signup-back-arrow" onClick={props.signupToggle}>
            <i className="fa fa-arrow-circle-left"></i> Back
          </span>
          <br />
          <br />
          <span id="signup-card-hdr">Create An Account</span>
          <input
            id="signup-first-name"
            type="text"
            placeholder="What Is Your First Name?"
            required
          />
          <input
            id="signup-last-name"
            type="text"
            placeholder="What Is Your Last Name?"
            required
          />
          <input
            id="signup-age"
            type="text"
            placeholder="How Old Are You?"
            required
          />
          <input
            id="signup-location-city"
            type="text"
            placeholder="What City Do You Live In?"
            required
          />
          <input
            id="signup-location-state"
            type="text"
            placeholder="What State Do You Live In?"
            required
          />
          <input
            id="signup-email"
            type="email"
            placeholder="Enter Your E-Mail Address Here"
            required
          />
          <input
            id="create-user"
            type="text"
            placeholder="Create A Username"
            required
          />
          <input
            id="create-pass"
            type="text"
            placeholder="Create A Password"
            required
          />
          <div id="pass-alert"></div>
          <div id="pass-alert-message">
            *password must be at least 8 characters, contain one uppercase, one
            lowercase, one number, and one special character
          </div>
          <br />
          <button
            id="signup-btn"
            className="btn btn-success"
            type="button"
            onClick={props.createNew}
          >
            Sign Up
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default Login;

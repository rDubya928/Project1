// react and jquery imports
import React from "react";
import $ from "jquery";
// children component imports
import Login from "../children/Login";
import AccountInfoPage from "../children/AccountInfoPage";
import MyCirclePage from "../children/MyCirclePage";
import BulletinBoardPage from "../children/BulletinBoardPage";
import ProfilePage from "../children/ProfilePage";
import MapPage from "../children/MapPage";
import SettingsPage from "../children/SettingsPage";
// 'GlobeTredder' parent component [ES6 class]
class GlobeTredder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: false,
      signup: false,
      userLoggedIn: {},
      menu: false,
      windowView: "Login",
      pageView: "Profile",
      profileTab: "About Me",
      mapPins: [],
      pinKey: 0,
      tideHeights: [],
      tideExtremes: [],
      weatherData: [],
      tideInfoToggle: false,
      weatherInfoToggle: false,
      updateToggle: "",
      moreInfoToggle: false,
      fiats: {},
      rates: {},
      countries: {},
      languages: [],
    };
    this.loginToggle = this.loginToggle.bind(this);
    this.signupToggle = this.signupToggle.bind(this);
    this.createNew = this.createNew.bind(this);
    this.handleAccountDelete = this.handleAccountDelete.bind(this);
    this.accountDelete = this.accountDelete.bind(this);
    this.accountUpdateDisplay = this.accountUpdateDisplay.bind(this);
    this.updateUserAccount = this.updateUserAccount.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.pageToggle = this.pageToggle.bind(this);
    this.profileViewToggle = this.profileViewToggle.bind(this);
    this.mapPinCreator = this.mapPinCreator.bind(this);
    this.handleTideDisplay = this.handleTideDisplay.bind(this);
    this.handleWeatherDisplay = this.handleWeatherDisplay.bind(this);
    this.handleMoreDisplay = this.handleMoreDisplay.bind(this);
  }
  loginToggle() {
    this.setState({
      credentials: !this.state.credentials,
    });
  }
  signupToggle() {
    this.setState({
      signup: !this.state.signup,
    });
  }
  createNew() {
    let newId = (this.props.database.users.length + 1).toString();
    let newFirstName = document.getElementById("signup-first-name").value;
    let newLastName = document.getElementById("signup-last-name").value;
    let newAge = document.getElementById("signup-age").value;
    let newCity = document.getElementById("signup-location-city").value;
    let newState = document.getElementById("signup-location-state").value;
    let newEmail = document.getElementById("signup-email").value;
    let newUserName = document.getElementById("create-user").value;
    let newPassword = document.getElementById("create-pass").value;
    let passwordAlert = document.getElementById("pass-alert");
    let newUserObject = {
      log_info: {
        user_id: newId,
        username: newUserName,
        password: newPassword,
      },
      user_info: {
        name: { first_name: newFirstName, last_name: newLastName },
        email: newEmail,
        age: newAge,
        city: newCity,
        state: newState,
        reset_password: {
          question: "",
          answer: "",
        },
      },
    };
    if (newFirstName === "") {
      passwordAlert.innerHTML = "Please enter your first name";
    } else if (newLastName === "") {
      passwordAlert.innerHTML = "Please enter your last name";
    } else if (newAge === "") {
      passwordAlert.innerHTML = "Please enter your age";
    } else if (/^\d{1,3}$/y.test(newAge) !== true) {
      passwordAlert.innerHTML =
        "Your age must be entered as a number 1-3 digits long";
    } else if (newCity === "") {
      passwordAlert.innerHTML =
        "Please enter what city you currently reside in";
    } else if (newState === "") {
      passwordAlert.innerHTML =
        "Please enter what state you currently reside in";
    } else if (newEmail === "") {
      passwordAlert.innerHTML = "Please enter an email address";
    } else if (newUserName === "") {
      passwordAlert.innerHTML = "Please enter a username";
    } else if (/[A-Z]/.test(newPassword) !== true) {
      passwordAlert.innerHTML = "Password should contain an uppercase letter";
    } else if (/[a-z]/.test(newPassword) !== true) {
      passwordAlert.innerHTML = "Password should contain a lowercase letter";
    } else if (/\d/.test(newPassword) !== true) {
      passwordAlert.innerHTML = "Password should contain a number";
    } else if (/[?!#*_]/.test(newPassword) !== true) {
      passwordAlert.innerHTML =
        "Password should contain a special character (?!#*_)";
    } else if (/.{8,}/.test(newPassword) !== true) {
      passwordAlert.innerHTML = "Password must be at least 8 characters long";
    } else {
      this.props.submitAddUser(newUserObject);
      this.setState({
        userLoggedIn: newUserObject,
        windowView: "Presentational",
      });
    }
  }
  handleAccountDelete() {
    document.getElementById("delete-alert").innerHTML = "";
    $("#id09").css("display", "none");
    $("#id11").css("display", "block");
  }
  accountDelete() {
    let alert = document.getElementById("delete-alert");
    let password = document.getElementById("delete-verify").value;
    if (password === this.state.userLoggedIn.log_info.password) {
      let index = this.props.database.users.indexOf(this.state.userLoggedIn);
      this.props.submitDeleteUser(index);
      this.setState({
        windowView: "Login",
        pageView: "Profile",
        profileTab: "About Me",
      });
      $("#id11").css("display", "none");
    } else {
      alert.innerHTML = "Invalid Password";
    }
  }
  accountUpdateDisplay(e) {
    this.setState({ updateToggle: e.target.innerHTML });
    document.getElementById("update-alert").innerHTML = "";
    $("#id09").css("display", "block");
  }
  updateUserAccount() {
    let alert = document.getElementById("update-alert");
    let index = this.props.database.users.indexOf(this.state.userLoggedIn);
    let updateUsername = document.getElementById("update-username");
    let updatePassword = document.getElementById("update-password");
    if (updateUsername === null) {
      if (updatePassword.value === "") {
        alert.innerHTML = "Please provide a new password";
      } else {
        let newPasswordInfo = Object.assign({}, this.state.userLoggedIn, {
          log_info: Object.assign({}, this.state.userLoggedIn.log_info, {
            password: updatePassword.value,
          }),
        });
        this.props.submitUpdatePassword({
          value: newPasswordInfo,
          index: index,
        });
        updatePassword.value = "";
        $("#id09").css("display", "none");
      }
    } else if (updatePassword === null) {
      if (updateUsername.value === "") {
        alert.innerHTML = "Please provide a new username";
      } else {
        let newUsernameInfo = Object.assign({}, this.state.userLoggedIn, {
          log_info: Object.assign({}, this.state.userLoggedIn.log_info, {
            username: updateUsername.value,
          }),
        });
        this.props.submitUpdateUsername({
          value: newUsernameInfo,
          index: index,
        });
        this.props.submitUserLogIn(newUsernameInfo);
        updateUsername.value = "";
        $("#id09").css("display", "none");
      }
    }
  }
  signIn() {
    let userName = document.getElementById("login-user").value;
    let userPass = document.getElementById("login-pass").value;
    let userObject = this.props.database.users.filter(
      (item) => userName === item.log_info.username
    )[0];
    if (userObject === undefined) {
      document.getElementById("alert").innerHTML = "Invalid User Name";
    } else {
      if (userObject.log_info.password === userPass) {
        document.getElementById("alert").innerHTML = "";
        this.props.submitUserLogIn(userObject);
        this.setState({
          userLoggedIn: userObject,
          windowView: "Presentational",
        });
      } else {
        document.getElementById("alert").innerHTML = "Invalid Password";
      }
    }
  }
  signOut() {
    this.props.submitUserLogOut();
    this.setState({
      windowView: "Login",
      pageView: "Profile",
      profileTab: "About Me",
    });
  }
  menuToggle(e) {
    let profileTabs = document.getElementById("profile-tabs");
    let smartphoneTabs = document.getElementById("smartphone-tabs");
    if (
      this.state.windowView === "Presentational" &&
      this.state.pageView !== "Profile"
    ) {
      if (e.target.innerHTML === "Menu" || e.target.id === "menu-search") {
        this.setState({
          menu: true,
        });
      } else {
        this.setState({
          menu: false,
        });
      }
    }
    if (
      this.state.windowView === "Presentational" &&
      this.state.pageView === "Profile" &&
      smartphoneTabs.scrollWidth === 0
    ) {
      if (e.target.innerHTML === "Menu" || e.target.id === "menu-search") {
        this.setState({
          menu: true,
        });
      } else {
        this.setState({
          menu: false,
        });
      }
    }
    if (
      this.state.windowView === "Presentational" &&
      this.state.pageView === "Profile" &&
      profileTabs.scrollWidth === 0
    ) {
      if (e.target.innerHTML === "Menu" || e.target.id === "menu-search") {
        $("#smartphone-tabs").hide();
        this.setState({
          menu: true,
        });
      } else {
        $("#smartphone-tabs").show();
        this.setState({
          menu: false,
        });
      }
    }
  }
  pageToggle(e) {
    this.setState({
      pageView: e.target.innerHTML,
      profileTab: "About Me",
    });
  }
  profileViewToggle(e) {
    this.setState({
      profileTab: e.target.innerHTML,
    });
  }
  mapPinCreator() {
    this.setState({
      mapPins: [
        ...this.state.mapPins,
        <i
          className="fas fa-map-pin map-pin draggable"
          draggable={true}
          style={{ color: "black" }}
          key={this.state.pinKey++}
        ></i>,
      ],
      pinKey: this.state.pinKey++,
    });
  }
  handleHide() {
    $("#id01").css("display", "none");
    $("#id09").css("display", "none");
    $("#id11").css("display", "none");
  }
  handleTideDisplay() {
    this.setState({
      tideInfoToggle: !this.state.tideInfoToggle,
      weatherInfoToggle: false,
      moreInfoToggle: false,
    });
    if (this.state.tideInfoToggle === false) {
      $("#id02").css("display", "block");
      $("#id03").css("display", "block");
      $("#id04").css("display", "none");
      $("#id05").css("display", "none");
    } else if (this.state.tideInfoToggle === true) {
      $("#id03").css("display", "none");
    }
  }
  hidePopUpDisplay() {
    $("#id02").css("display", "block");
    $("#id03").css("display", "none");
    $("#id04").css("display", "none");
    $("#id05").css("display", "none");
  }
  handleWeatherDisplay() {
    fetch("./data/team_data/weather/weatherForcast16days0.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          weatherData: data,
          tideInfoToggle: false,
          weatherInfoToggle: !this.state.weatherInfoToggle,
          moreInfoToggle: false,
        });
      });
    if (this.state.weatherInfoToggle === false) {
      $("#id02").css("display", "block");
      $("#id03").css("display", "none");
      $("#id04").css("display", "block");
      $("#id05").css("display", "none");
    } else if (this.state.weatherInfoToggle === true) {
      $("#id04").css("display", "none");
    }
  }
  handleMoreDisplay() {
    this.setState({
      tideInfoToggle: false,
      weatherInfoToggle: false,
      moreInfoToggle: !this.state.moreInfoToggle,
    });
    if (this.state.moreInfoToggle === false) {
      $("#id02").css("display", "block");
      $("#id03").css("display", "none");
      $("#id04").css("display", "none");
      $("#id05").css("display", "block");
    } else if (this.state.moreInfoToggle === true) {
      $("#id05").css("display", "none");
    }
  }
  componentDidMount() {
    fetch("./data/user_data/globetredderDB.json")
      .then((response) => response.json())
      .then((data) => {
        data.globetredder_users.map((item) =>
          this.props.database.users.push(item)
        );
      });
    fetch("./data/team_data/currency.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ fiats: data.response.fiats });
      });
    fetch("./data/team_data/countries.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data });
      });
    fetch("./data/team_data/languages.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ languages: data.alpha2Code });
      });
    fetch("./data/team_data/currencyRates.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ rates: data.response.rates });
      });
  }
  render() {
    return (
      <div id="parent-container" onClick={this.menuToggle}>
        {this.state.windowView === "Login" ? (
          <Login
            credentials={this.state.credentials}
            signup={this.state.signup}
            loginToggle={this.loginToggle}
            signupToggle={this.signupToggle}
            signIn={this.signIn}
            createNew={this.createNew}
          />
        ) : this.state.windowView === "Presentational" ? (
          <div>
            <nav>
              <button className="btn btn-success dropdown-toggle" type="button">
                Menu
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.signOut}
              >
                Logout
              </button>
              <span>
                <i className="fas fa-globe-americas"></i>GlobeTredder
              </span>
              {this.state.menu === true ? (
                <div className="dropdown">
                  <div className="menu">
                    <input id="menu-search" type="text" placeholder="search" />
                    <a
                      className="dropdown-item"
                      href="##"
                      onClick={this.pageToggle}
                    >
                      Account Info
                    </a>
                    <a
                      className="dropdown-item"
                      href="##"
                      onClick={this.pageToggle}
                    >
                      My Circle
                    </a>
                    <a
                      className="dropdown-item"
                      href="##"
                      onClick={this.pageToggle}
                    >
                      Bulletin Board
                    </a>
                    <a
                      className="dropdown-item"
                      href="##"
                      onClick={this.pageToggle}
                    >
                      Profile
                    </a>
                    <a
                      className="dropdown-item"
                      href="##"
                      onClick={this.pageToggle}
                    >
                      Map
                    </a>
                    <a
                      className="dropdown-item"
                      href="##"
                      onClick={this.pageToggle}
                    >
                      Settings
                    </a>
                  </div>
                </div>
              ) : null}
            </nav>
            <div id="presentational">
              {this.state.windowView === "Presentational" &&
              this.state.pageView === "Account Info" ? (
                <AccountInfoPage
                  accountUpdateDisplay={this.accountUpdateDisplay}
                  handleAccountDelete={this.handleAccountDelete}
                  accountDelete={this.accountDelete}
                  updateUserAccount={this.updateUserAccount}
                  updateToggle={this.state.updateToggle}
                  user={this.props.logger.user}
                  handleHide={this.handleHide}
                />
              ) : this.state.windowView === "Presentational" &&
                this.state.pageView === "My Circle" ? (
                <MyCirclePage
                  userLoggedIn={this.state.userLoggedIn}
                  friends={this.props.database.users}
                />
              ) : this.state.windowView === "Presentational" &&
                this.state.pageView === "Bulletin Board" ? (
                <BulletinBoardPage />
              ) : this.state.windowView === "Presentational" &&
                this.state.pageView === "Profile" ? (
                <ProfilePage
                  view={this.state.profileTab}
                  tabClick={this.profileViewToggle}
                  userLoggedIn={this.state.userLoggedIn}
                  friends={this.props.database.users}
                />
              ) : this.state.windowView === "Presentational" &&
                this.state.pageView === "Map" ? (
                <MapPage
                  mapPins={this.state.mapPins}
                  mapPinCreator={this.mapPinCreator}
                  country={this.props.map.country}
                  tideHeights={this.state.tideHeights}
                  tideExtremes={this.state.tideExtremes}
                  weatherData={this.state.weatherData}
                  handleHide={this.handleHide}
                  handleTideDisplay={this.handleTideDisplay}
                  hidePopUpDisplay={this.hidePopUpDisplay}
                  handleWeatherDisplay={this.handleWeatherDisplay}
                  submitCountryInfo={this.props.submitCountryInfo}
                  handleMoreDisplay={this.handleMoreDisplay}
                  moreInfoToggle={this.state.moreInfoToggle}
                  fiats={this.state.fiats}
                  rates={this.state.rates}
                  countries={this.state.countries}
                  languages={this.state.languages}
                />
              ) : this.state.windowView === "Presentational" &&
                this.state.pageView === "Settings" ? (
                <SettingsPage />
              ) : null}
            </div>
            <footer>
              <span>
                <i className="fas fa-copyright"></i> GlobeTredder LLC
              </span>
            </footer>
          </div>
        ) : null}
      </div>
    );
  }
}
export default GlobeTredder;

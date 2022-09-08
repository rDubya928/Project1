// react, react-dom, react-router, redux and reportWebVitals imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import reportWebVitals from "./reportWebVitals";
// bootstrap and css/sass styling imports
import "bootstrap/dist/css/bootstrap.css";
import "./components/GlobeTredder/css/GlobeTredder.css";
import "./components/GlobeTredder/css/tablet.css";
import "./components/GlobeTredder/css/mobile.css";
// redux action creator and reducer imports
import {
  userLogIn,
  userLogOut,
  addUser,
  deleteUser,
  updateUsername,
  updatePassword,
  grabInfo,
} from "./actions";
import { userLogReducer, databaseReducer, countryReducer } from "./reducers";
// 'GlobeTredder' parent component import
import GlobeTredder from "./components/GlobeTredder/components/parent/GlobeTredder";

// redux root reducer
const rootReducer = combineReducers({
  logger: userLogReducer,
  database: databaseReducer,
  map: countryReducer,
});
// redux store
const store = createStore(rootReducer);
// mapping redux state to parent component's props
const mapStateToProps = (state) => {
  return state;
};
// mapping redux dispatches to parent component's props
const mapDispatchToProps = (dispatch) => {
  return {
    submitUserLogIn: (userObject) => {
      dispatch(userLogIn(userObject));
    },
    submitUserLogOut: (userObject) => {
      dispatch(userLogOut(userObject));
    },
    submitAddUser: (newData) => {
      dispatch(addUser(newData));
    },
    submitDeleteUser: (oldData) => {
      dispatch(deleteUser(oldData));
    },
    submitUpdateUsername: (username) => {
      dispatch(updateUsername(username));
    },
    submitUpdatePassword: (password) => {
      dispatch(updatePassword(password));
    },
    submitCountryInfo: (newCountry) => {
      dispatch(grabInfo(newCountry));
    },
  };
};
// connecting parent component to redux store
const GlobeTredderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobeTredder);
// rendering react components to the html dom
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path={"/globetredder"} component={GlobeTredderContainer} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
// if you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. learn more: https://bit.ly/CRA-vitals
reportWebVitals();

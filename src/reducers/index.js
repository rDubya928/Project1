// jquery import
import $ from "jquery";

// initial state object for 'countryReducer'
const initialState = {
  country: {
    name: "",
    topLevelDomain: [""],
    alpha2Code: "",
    alpha3Code: "",
    callingCodes: [""],
    capital: "",
    altSpellings: ["", ""],
    region: "",
    subregion: "",
    population: 0,
    latlng: [0, 0],
    demonym: "",
    area: 0,
    gini: 0,
    timezones: [""],
    borders: ["", ""],
    nativeName: "",
    numericCode: "",
    currencies: [""],
    languages: ["", ""],
    translations: {
      de: "",
      es: "",
      fr: "",
      ja: "",
      it: "",
    },
    relevance: "",
  },
};
// default state object for 'userLogReducer'
const defaultState = {
  loggedIn: false,
  user: {
    log_info: {
      user_id: "",
      username: "",
      password: "",
    },
    user_info: {
      name: { first_name: "", last_name: "" },
      email: "",
      age: "",
      city: "",
      state: "",
      reset_password: { question: "", answer: "" },
    },
  },
  date: new Date().toLocaleDateString(),
  time: new Date().toTimeString().match(/\d{2}:\d{2}:\d{2}/)[0],
};
// countryReducer
export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GRAB":
      $("#id01").css("display", "block");
      return { country: action.payload };
    default:
      return state;
  }
};
// userLogReducer
export const userLogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, { loggedIn: true, user: action.payload });
    case "LOGOUT":
      return Object.assign({}, state, {
        loggedIn: false,
        date: new Date().toLocaleDateString(),
        time: new Date().toTimeString().match(/\d{2}:\d{2}:\d{2}/)[0],
      });
    default:
      return state;
  }
};
// databaseReducer
export const databaseReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        users: [...state.users, action.payload],
      });
    case "DELETE":
      return Object.assign({}, state, {
        users: state.users
          .slice(0, action.payload)
          .concat(state.users.slice(action.payload + 1)),
      });
    case "UPDATEUSERNAME":
      return Object.assign({}, state, {
        users: state.users
          .slice(0, action.payload.index)
          .concat(action.payload.value)
          .concat(state.users.slice(action.payload.index + 1)),
      });
    case "UPDATEPASSWORD":
      return Object.assign({}, state, {
        users: state.users
          .slice(0, action.payload.index)
          .concat(action.payload.value)
          .concat(state.users.slice(action.payload.index + 1)),
      });
    default:
      return state;
  }
};

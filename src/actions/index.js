// action creators for 'userLogReducer'
// login - for user log
export const userLogIn = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};
// logout - for user log
export const userLogOut = (payload) => {
  return {
    type: "LOGOUT",
    payload,
  };
};
// action creators for 'databaseReducer'
// add - adds new user to database
export const addUser = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};
// delete - deletes user from database
export const deleteUser = (payload) => {
  return {
    type: "DELETE",
    payload,
  };
};
// update - changes user's username information in database
export const updateUsername = (payload) => {
  return {
    type: "UPDATEUSERNAME",
    payload,
  };
};
// update - changes user's password information in database
export const updatePassword = (payload) => {
  return {
    type: "UPDATEPASSWORD",
    payload,
  };
};
// action creators for 'countryReducer'
// grab - for country data
export const grabInfo = (payload) => {
  return {
    type: "GRAB",
    payload,
  };
};

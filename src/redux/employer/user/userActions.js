import axios from "axios";

export const fetchEmployerUsers = (e_username, e_password) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  const data = {
    username: e_username,
    password: e_password,
  };
  return (dispatch) => {
    dispatch(fetchEmployerUsersRequest());
    axios
      .post("http://localhost:5000/users/employer/login", data, {
        headers: headers,
      })
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchEmployerUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchEmployerUsersFailure(error.message));
      });
  };
};

export const fetchEmployerUsersRequest = () => {
  return {
    type: "FETCH_EMPLOYER_USERS_REQUEST",
  };
};

export const fetchEmployerUsersSuccess = (users) => {
  return {
    type: "FETCH_EMPLOYER_USERS_SUCCESS",
    payload: users,
  };
};

export const fetchEmployerUsersFailure = (error) => {
  return {
    type: "FETCH_EMPLOYER_USERS_FAILURE",
    payload: error,
  };
};

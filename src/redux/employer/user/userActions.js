import axios from "axios";
import { fetchEmployerPosts } from "../posted/postedActions";

export const fetchEmployerUsers = (token) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization":`bearer ${token}`
  };
  const data = {}; 
  return (dispatch) => {
    dispatch(fetchEmployerUsersRequest());
    axios
      .post("http://localhost:5000/users/employer/fetch", data, {
        headers: headers,
      })
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchEmployerUsersSuccess(users));
        dispatch(fetchEmployerPosts(token));
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

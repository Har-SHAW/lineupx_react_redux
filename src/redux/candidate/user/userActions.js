import axios from "axios";
import { fetchCandidatePosts } from "../posts/postsActions";

export const fetchCandidateUsers = (token) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization":`bearer ${token}`
  };
  const data = {};
  return (dispatch) => {
    dispatch(fetchCandidateUsersRequest());
    axios
      .post("http://localhost:5000/users/candidate/fetch", data, {
        headers: headers,
      })
      .then((response) => {
        // response.data is the users
        const users = response.data;
        console.log(response.data);
        dispatch(fetchCandidateUsersSuccess(users));
        dispatch(fetchCandidatePosts(response.data.token));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchCandidateUsersFailure(error.message));
      });
  };
};

export const fetchCandidateUsersRequest = () => {
  return {
    type: "FETCH_CANDIDATE_USERS_REQUEST",
  };
};

export const fetchCandidateUsersSuccess = (users) => {
  return {
    type: "FETCH_CANDIDATE_USERS_SUCCESS",
    payload: users,
  };
};

export const fetchCandidateUsersFailure = (error) => {
  return {
    type: "FETCH_CANDIDATE_USERS_FAILURE",
    payload: error,
  };
};


export const setAccepted = id => {
  return {
    type: "SET_ACCEPTED",
    payload: id
  }
}

export const setRejected = id => {
  return {
    type: "SET_REJECTED",
    payload: id
  }
}
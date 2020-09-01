import axios from "axios";

export const fetchCandidateUsers = (c_username, c_password) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };
  const data = {
    username: c_username,
    password: c_password,
  };
  return (dispatch) => {
    dispatch(fetchCandidateUsersRequest());
    axios
      .post("http://localhost:5000/users/candidate/login", data, { headers: headers })
      .then((response) => {
        // response.data is the users
        const users = response.data;
        console.log(response.data);
        dispatch(fetchCandidateUsersSuccess(users));
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

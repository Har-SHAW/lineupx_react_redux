import axios from "axios";

export const setCandidatePosts = posts => {
    return {
        type: "SET_CANDIDATE_POST",
        payload: posts
    }
}

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


export const fetchCandidatePosts = (token) => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization":`bearer ${token}`
    };
    return (dispatch) => {
      dispatch(fetchCandidatePostsRequest());
      axios
        .get("http://localhost:5000/posts", {
          headers: headers,
        })
        .then((response) => {
          // response.data is the users
          const users = response.data;
          console.log(users);
          dispatch(fetchCandidatePostsSuccess(users));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchCandidatePostsFailure(error.message));
        });
    };
  };

  export const fetchCandidatePostsRequest = () => {
    return {
      type: "FETCH_CANDIDATE_POSTS_REQUEST",
    };
  };
  
  export const fetchCandidatePostsSuccess = (users) => {
    return {
      type: "SET_CANDIDATE_POST",
      payload: users,
    };
  };
  
  export const fetchCandidatePostsFailure = (error) => {
    return {
      type: "FETCH_CANDIDATE_POSTS_FAILURE",
      payload: error,
    };
  };
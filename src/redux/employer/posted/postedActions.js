import axios from "axios";

export const setPosts = posts => {
    return {
        type: "SET_POST",
        payload: posts
    }
}

export const addPost = post => {
    return {
        type: "ADD_POST",
        payload: post
    }
}

export const fetchEmployerPosts = (token) => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization":`bearer ${token}`
    };
    return (dispatch) => {
      dispatch(fetchEmployerPostsRequest());
      axios
        .get("http://localhost:5000/users/employer/login", {
          headers: headers,
        })
        .then((response) => {
          // response.data is the users
          const users = response.data;
          dispatch(fetchEmployerPostsSuccess(users));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchEmployerPostsFailure(error.message));
        });
    };
  };

  export const fetchEmployerPostsRequest = () => {
    return {
      type: "FETCH_EMPLOYER_POSTS_REQUEST",
    };
  };
  
  export const fetchEmployerPostsSuccess = (users) => {
    return {
      type: "FETCH_EMPLOYER_POSTS_SUCCESS",
      payload: users,
    };
  };
  
  export const fetchEmployerPostsFailure = (error) => {
    return {
      type: "FETCH_EMPLOYER_POSTS_FAILURE",
      payload: error,
    };
  };
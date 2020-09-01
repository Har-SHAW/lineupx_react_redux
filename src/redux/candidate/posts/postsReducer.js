const initState = {
  loading: false,
  posts: [
    
  ],

  error: "",
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CANDIDATE_POST":
      return {
        ...state,
        posts: action.payload
      };
    case "FETCH_CANDIDATE_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_CANDIDATE_POSTS_FAILURE":
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;

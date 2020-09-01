const initState = {
    loading: false,
    posts: [
      
    ],
  
  error: "",
};

const postedReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "ADD_POST":
      return {
        loading: false,
        posts: [...state.posts, action.payload],
        error: ""
      };
      case 'FETCH_EMPLOYER_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_EMPLOYER_POSTS_FAILURE':
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postedReducer;

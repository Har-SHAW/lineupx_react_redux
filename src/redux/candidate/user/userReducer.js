const initialState = {
    loading: false,
    user: {
      id: "0",
      token: "some token",
      name: "Harsha vardhan",
      organization: "LineupX",
      firstname: "",
      lastname: "",
      candidate: "",
      accepted:["0"],
      rejected:["0"]
    },
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CANDIDATE_USERS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_CANDIDATE_USERS_SUCCESS':
        return {
          loading: false,
          user: action.payload,
          error: "",
        };
      case 'FETCH_CANDIDATE_USERS_FAILURE':
        return {
          loading: false,
          user: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
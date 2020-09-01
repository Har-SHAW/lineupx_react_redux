const initialState = {
  loading: false,
  user: {
    id: 0,
    token: "some token",
    name: "Harsha vardhan",
    organization: "LineupX",
    firstname: "",
    lastname: "",
    candidate: "",
  },
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYER_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_EMPLOYER_USERS_SUCCESS':
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case 'FETCH_EMPLOYER_USERS_FAILURE':
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

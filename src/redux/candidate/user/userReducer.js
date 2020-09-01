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
    accepted: ["0"],
    rejected: ["1"],
  },
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CANDIDATE_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_CANDIDATE_USERS_SUCCESS":
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case "FETCH_CANDIDATE_USERS_FAILURE":
      return {
        loading: false,
        user: {},
        error: action.payload,
      };
    case "SET_ACCEPTED": {
      let obj = state;
      let lst = state.user.accepted;
      if (!lst.includes(action.payload)) {
        lst.push(action.payload);
      }
      obj.user.accepted = lst;
      return obj;
    }
    default:
      return state;
  }
};

export default reducer;

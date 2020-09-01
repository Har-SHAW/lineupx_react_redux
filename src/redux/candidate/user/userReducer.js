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
      let alst = state.user.accepted;
      if (!alst.includes(action.payload)) {
        alst.push(action.payload);
      }
      let rlst = state.user.rejected;
      for(let i=0;i<rlst.length;i++){
        if(rlst[i] === action.payload){
          rlst.splice(i,1);
        }
      }
      obj.user.accepted = alst;
      obj.user.rejected = rlst
      return obj;
    };
    case "SET_REJECTED": {
      let obj = state;
      let alst = state.user.accepted;
      for(let i=0;i<alst.length;i++){
        if(alst[i] === action.payload){
          alst.splice(i,1);
        }
      }
      let rlst = state.user.rejected;
      
      if (!rlst.includes(action.payload)) {
        rlst.push(action.payload);
      }
      obj.user.accepted = alst;
      obj.user.rejected = rlst
      return obj;
    }
    default:
      return state;
  }
};

export default reducer;

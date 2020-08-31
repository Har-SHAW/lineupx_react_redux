const initState = {
    usr: {
        id: 0,
        username: "shaw",
        token: "some token",
        name: "Harsha vardhan"
    }
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_CANDIDATE_USER": return {
            ...state,
            usr: action.payload
        }
        default: return state
    }
}

export default userReducer;
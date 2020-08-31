const initState = {
    usr: {
        id: 0,
        username: "shaw",
        token: "some token",
        name: "harsha vardhan",
        organization: "my organization"
    }
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_USER": return {
            ...state,
            usr: action.payload
        }
        default: return state
    }
}

export default userReducer;
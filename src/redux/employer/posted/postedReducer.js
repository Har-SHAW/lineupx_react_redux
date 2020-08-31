const initState = {
    posts: [{
        id: 0,
        title: "some title",
        description: "some description",
        salary: "1000",
    }]
}

const postedReducer = (state = initState, action) => {
    switch(action.type){
        case "SET_POST": return{
            ...state,
            posts: action.payload
        }
        case "ADD_POST": return{
            ...state,
            posts: [...state.posts, action.payload]
        }
        default : return state
    }
}

export default postedReducer
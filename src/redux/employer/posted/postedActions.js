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
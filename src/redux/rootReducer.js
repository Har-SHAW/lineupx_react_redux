import {combineReducers} from "redux"
import userReducerEmployer from "./employer/user/userReducer"
import postedReducerEmployer from "./employer/posted/postedReducer"
import userReducerCandidate from "./candidate/user/userReducer"
import postsReducerCandidate from "./candidate/posts/postsReducer"

const rootReducer  = combineReducers({
    userEmployer: userReducerEmployer,
    postedEmployer: postedReducerEmployer,
    userCandidate: userReducerCandidate,
    postsCandidate: postsReducerCandidate

})

export default rootReducer;
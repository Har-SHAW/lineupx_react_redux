import {combineReducers} from "redux"
import userReducerEmployer from "./employer/user/userReducer"
import postedReducerEmployer from "./employer/posted/postedReducer"

const rootReducer  = combineReducers({
    userEmployer: userReducerEmployer,
    postedEmployer: postedReducerEmployer
})

export default rootReducer;
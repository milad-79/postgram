import { combineReducers } from "redux";
import posts from './get_posts'


const AppReducer = combineReducers({
    posts
})

export default AppReducer;
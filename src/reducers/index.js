import { combineReducers } from "redux";
import AllPostReducer from './reducers-Allpost';

const rootReducer=combineReducers({
    allPosts:AllPostReducer,
})

export default rootReducer;
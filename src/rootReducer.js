import {combineReducers} from "redux";
import taskReducer from "./components/todos/taskReducer";

const rootReducer = combineReducers({task: taskReducer});

export default rootReducer
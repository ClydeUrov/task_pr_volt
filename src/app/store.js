import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../components/todo_list/taskSlice";

export default configureStore({
    reducer: {
        weather: taskSlice,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./features/ExerciseSlice";


export const store = configureStore({
    reducer: {
        exercises: exerciseReducer
    }
})
export default store;
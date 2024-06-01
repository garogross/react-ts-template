import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slices/toDoSlice";


const rootReducer = combineReducers({
    todo: TodoReducer
})

export const store = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DoSlice from "./reducers/DoSlice";



const rootReducer = combineReducers({
    DoSlice: DoSlice,
})


const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});


export type AppDispatch = typeof store.dispatch;
export type RootType = ReturnType<typeof store.getState>
export default store;
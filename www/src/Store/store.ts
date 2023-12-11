import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DoSlice from "./reducers/DoSlice";
import CompleteDoSlice from "./reducers/CompleteDoSlice";
import LikedDoSlice from "./reducers/LikedDoSlice";



const rootReducer = combineReducers({
    DoSlice: DoSlice,
    CompleteDoSlice: CompleteDoSlice,
    LikedDoSlice: LikedDoSlice,
})


const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});


export type AppDispatch = typeof store.dispatch;
export type RootType = ReturnType<typeof store.getState>
export default store;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoType from "../../types/TodoType";


interface StateType {
    likedTodos: TodoType[]
}

const initialState: StateType = {
    likedTodos: []
}



const LikedDoSlice = createSlice({
    name: 'LikedDo',
    initialState,
    reducers: {
        LikeDo(state, action: PayloadAction<TodoType>) {
            state.likedTodos.unshift(action.payload);
        }
    }
})


export default LikedDoSlice.reducer;
export const { LikeDo } = LikedDoSlice.actions;
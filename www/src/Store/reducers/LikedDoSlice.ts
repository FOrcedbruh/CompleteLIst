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
        },
        deleteLikedSlice(state, action: PayloadAction<number>) {
            state.likedTodos.forEach((todo, i) => {
                if (todo.id === action.payload) {
                    state.likedTodos.splice(i, 1);
                }
            })
        }
    }
})


export default LikedDoSlice.reducer;
export const { LikeDo, deleteLikedSlice } = LikedDoSlice.actions;
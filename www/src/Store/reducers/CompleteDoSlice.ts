import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoType from "../../types/TodoType";


interface StateType {
    completeTodos: TodoType[],
    time: string,
    complete: boolean
}


const initialState: StateType = {
    completeTodos: [],
    time: Date(),
    complete: false
}


const CompleteDoSlice = createSlice({
    name: 'completeDo',
    initialState,
    reducers: {
        completeDo(state, action: PayloadAction<TodoType>) {
            state.completeTodos.unshift(action.payload);
        },
        setStatusComplete(state, action: PayloadAction<boolean>) {
            state.complete = action.payload;
        },
        deleteComplete(state, action: PayloadAction<number>) {
            state.completeTodos.splice(action.payload);
        }
    }
})



export default CompleteDoSlice.reducer;
export const { completeDo, deleteComplete, setStatusComplete } = CompleteDoSlice.actions;
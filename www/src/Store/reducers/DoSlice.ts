import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TodoType from '../../types/TodoType';


interface StateType {
    Todos: TodoType[]
}

const initialState: StateType = {
    Todos: [],
}


const DoSlice = createSlice({
    name: 'do',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<TodoType>) {
            state.Todos.push(action.payload);
            action.payload.id = state.Todos.length - 1;
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.Todos.splice(action.payload);
        }
    }
})



export default DoSlice.reducer;
export const { createTodo, deleteTodo } = DoSlice.actions;
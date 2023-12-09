import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TodoType from '../../types/TodoType';


interface StateType {
    Todos: TodoType[],
    time: string,
}

const initialState: StateType = {
    Todos: [],
    time: Date(),

}


const DoSlice = createSlice({
    name: 'do',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<TodoType>) {
            state.Todos.push(action.payload);
            action.payload.id = state.Todos.length - 1;
            action.payload.complete = false;
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.Todos.forEach((todo, i) => {
                    if (todo.id === action.payload) {
                        state.Todos.splice(i, 1);
                    }
            })
        }
    }
})



export default DoSlice.reducer;
export const { createTodo, deleteTodo } = DoSlice.actions;
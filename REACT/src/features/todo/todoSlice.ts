import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
    todoItems: Array<{ id: number, name: String, count: number }>
    sequence: number;
}

const initialState: TodoState = {
    todoItems: [
        { id: 1, name: "Example - Buy NVDA", count: 1 },
        { id: 2, name: "Example - Buy MSFT", count: 2 }],
    sequence: 2
};

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        add_item: (state: TodoState, action: PayloadAction<String>) => {
            state.todoItems.push({
                id: state.sequence + 1, name: action.payload, count: 0
            })
            state.sequence += 1;
        },
        complete_item: (state: TodoState, action: PayloadAction<number>) => {
            state.todoItems.map((i) => {
                if (i.id == action.payload) ++i.count;
            })
        },
        remove_item: (state: TodoState, action: PayloadAction<number>) => {
            state.todoItems = state.todoItems.filter((i) => i.id !== action.payload);
        }
    }
});

export const { add_item } = todoSlice.actions;
export const { complete_item } = todoSlice.actions;
export const { remove_item } = todoSlice.actions;
const todoReducer = todoSlice.reducer
export default todoReducer;
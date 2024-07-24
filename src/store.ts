import { configureStore } from "@reduxjs/toolkit";

export interface IRootState {
    todoItems: Array<{ id: number, name: String, count: number }>;
    username: String;
    sequence: number;
}

const initialState: IRootState = {
    todoItems: [{ id: 1, name: "Example - Buy NVDA", count: 1 }, { id: 2, name: "Example - Buy MSFT", count: 2 }],
    username: "Your name",
    sequence: 2,
};

const rootReducer = (state: IRootState = initialState): IRootState => {
    return state;
}

export const store = configureStore({
    reducer: rootReducer
});
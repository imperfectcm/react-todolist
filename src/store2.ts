import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./slices/todoSlice"

export const store2 = configureStore({
    reducer: {
        todo: todoReducer
    }
});

export type IRootState = ReturnType<typeof store2.getState>;
export type AppDispatcher = typeof store2.dispatch;
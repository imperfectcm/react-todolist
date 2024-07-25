import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./features/todo/todoSlice"
import authReducer from "./features/auth/authSlice";

export const store2 = configureStore({
    reducer: {
        todo: todoReducer,
        auth: authReducer,
    }
});

export type IRootState = ReturnType<typeof store2.getState>;
export type AppDispatcher = typeof store2.dispatch;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    username: String;
}

const initialState: AuthState = {
    username: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        add_username: (state: AuthState, action: PayloadAction<{ username: String }>) => {
            state.username = action.payload.username;
        },
        clear_username: (state: AuthState) => {
            state.username = "";
        },
    }
});

export const { add_username } = authSlice.actions;
export const { clear_username } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
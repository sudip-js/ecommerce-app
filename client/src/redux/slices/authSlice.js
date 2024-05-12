import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = action?.payload ?? null;
        },
        signOut: () => initialState,
    },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;

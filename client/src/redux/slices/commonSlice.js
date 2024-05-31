import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortOption: {
        name: 'Most Popular',
        sort_by: '',
        sort: ''
    },
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setSortOption: (state, action) => {
            state.sortOption = action?.payload ?? null;
        },
    },
});

export const { setSortOption } = commonSlice.actions;
export default commonSlice.reducer;

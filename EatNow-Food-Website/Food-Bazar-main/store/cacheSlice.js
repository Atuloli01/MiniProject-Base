import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = cacheSlice.actions;
export default cacheSlice.reducer;

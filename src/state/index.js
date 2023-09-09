import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};
/*
Reducers are functions that modify the global state.
Recall under the hood, with redux you typiclaly overwrite the whole state
Below it looks like we are modifying, but under the hood with toolkit and immer
its actually being overwritten. 

action is payload aka arguements for the function
*/
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setDarkMode: (state) => {
      state.mode = "dark"
    },
  },
});

export const { setMode, setDarkMode} =
  authSlice.actions;
export default authSlice.reducer;
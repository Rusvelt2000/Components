import { configureStore, createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
  },
});

console.log(store);

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
    emptyList(state, action) {
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
  },
});

export { store };
export const { addItem, emptyList } = listSlice.actions;

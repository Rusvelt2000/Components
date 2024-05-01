import { configureStore, createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      state.splice(action.payload, 1);
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
export const { addItem, emptyList, removeItem } = listSlice.actions;

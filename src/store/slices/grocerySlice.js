import { createSlice } from "@reduxjs/toolkit";
import { resetLists } from "../../store";

const groceryListSlice = createSlice({
  name: "groceryList",
  initialState: [],
  reducers: {
    addGroceryItem(state, action) {
      state.push(action.payload);
    },
    removeGroceryItem(state, action) {
      state.splice(action.payload, 1);
    },
    emptyGroceryList() {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(resetLists, (state, action) => {
      return [];
    });
  },
});

export const { addGroceryItem, emptyGroceryList, removeGroceryItem } =
  groceryListSlice.actions;
export const groceryReducer = groceryListSlice.reducer;

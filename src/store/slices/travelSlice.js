import { createSlice } from "@reduxjs/toolkit";
import { resetLists } from "../../store";

const travelListSlice = createSlice({
  name: "travelList",
  initialState: [],
  reducers: {
    addTravelItem(state, action) {
      state.push(action.payload);
    },
    removeTravelItem(state, action) {
      state.splice(action.payload, 1);
    },
    emptyTravelList() {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(resetLists, (state, action) => {
      return [];
    });
  },
});

export const { addTravelItem, emptyTravelList, removeTravelItem } =
  travelListSlice.actions;
export const travelReducer = travelListSlice.reducer;

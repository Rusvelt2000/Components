import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const resetLists = createAction("lists/reset");

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

const store = configureStore({
  reducer: {
    groceryList: groceryListSlice.reducer,
    travelList: travelListSlice.reducer,
  },
});

export { store };
export const { addGroceryItem, emptyGroceryList, removeGroceryItem } =
  groceryListSlice.actions;
export const { addTravelItem, emptyTravelList, removeTravelItem } =
  travelListSlice.actions;

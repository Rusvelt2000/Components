import { configureStore } from "@reduxjs/toolkit";
import {
  groceryReducer,
  addGroceryItem,
  emptyGroceryList,
  removeGroceryItem,
} from "./slices/grocerySlice";
import {
  travelReducer,
  addTravelItem,
  removeTravelItem,
  emptyTravelList,
} from "./slices/travelSlice";
import { resetLists } from "./actions";

const store = configureStore({
  reducer: {
    groceryList: groceryReducer,
    travelList: travelReducer,
  },
});

export { store };
export { addGroceryItem, removeGroceryItem, emptyGroceryList };
export { addTravelItem, emptyTravelList, removeTravelItem };
export { resetLists };

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { storeItem } from "../constants/models/storeItem";

const initialState: Array<storeItem> = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<storeItem>) => {
        
        const icon = action.payload.icon;
        const currItem: number = state.findIndex(
          (el: storeItem) => el.icon === icon
        );
        if (currItem !== -1) {
          
          state[currItem].quantity = state[currItem].quantity+action.payload.quantity;
        }
        else{
          state.push(action.payload);
        }
      },
      prepare: (value: storeItem) => {
        return { payload: { ...value } };
      },
    },
    removeItem: (state, action: PayloadAction<storeItem>) => {
      const id = action.payload.id;
      const currItem: number = state.findIndex(
        (el: storeItem) => el.id === id
      );
      state.splice(currItem, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

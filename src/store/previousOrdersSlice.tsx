import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { storeItem } from "../constants/models/storeItem";

const initialState:Array<storeItem>=[]

export const previousOrdersSlice = createSlice({
  name: "previousOrders",
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<storeItem>) => {
        state.push(action.payload);
      },
      prepare: (value: storeItem) => {
        return { payload: { ...value } };
      },
    },
    // removeItem: (state, action: PayloadAction<storeItem>) => {
    //   const id = action.payload.id;
    //   const currItem: number = state.findIndex((el: storeItem) => el.id === id);
    //   state.splice(currItem, 1);
    // },
  },
});

export const {addItem} = previousOrdersSlice.actions;
export default previousOrdersSlice.reducer;

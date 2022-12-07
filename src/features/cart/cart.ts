import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface StoreItem {
  id: number;
  category: string;
  src: string;
  name: string;
}

export interface CartState {
  items: StoreItem[];
  drawerOpened: boolean;
  //cats
  selectedCat: string;
  categories: string[];
}

const initCats = ["Blue Items", "Red Items"]

const initialState: CartState = {
  items: [],
  drawerOpened: false,
  selectedCat: initCats[0],
  categories: initCats,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleDrawer: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.drawerOpened = !state.drawerOpened;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addItem: (state, action: PayloadAction<StoreItem>) => {
      state.items.push(action.payload)
    },
    remItem: (state, action: PayloadAction<StoreItem>) => {
      for(let i = 0; i <= state.items.length; i++) {
        const item = state.items[i];
        if(item.id === action.payload.id) {
          state.items.splice(i, 1);
          break;
        }
      }
    },
    setCat: (state, action: PayloadAction<string>) => {
      state.selectedCat = action.payload
    }
  },
});

export const selectSelectedCat = (state: RootState) => state.cart.selectedCat;
export const selectCategories = (state: RootState) => state.cart.categories;
export const selectDrawerOpened = (state: RootState) => state.cart.drawerOpened;
export const selectItems = (state: RootState) => state.cart.items;


export const { toggleDrawer, addItem, remItem, setCat } = cartSlice.actions;
export default cartSlice.reducer;

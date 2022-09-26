import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    visible: false,
    products: [],
  },
  reducers: {
    add: (state, { payload }) => {
      state.products.push(payload);
      state.total += payload.price;
      state.visible = true;
    },
    clear: (state) => {
      state.products = [];
      state.total = 0;
      state.visible = true;
    },
    toggleVisible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { add, clear, toggleVisible } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state) => {
  return state.cart?.products;
};

export const selectVisible = (state) => {
  return state.cart?.visible;
}
export const selectTotal = (state) => {
  return state.cart?.total;
}

export default cartSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoaded: false,
    list: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      return {
        list: action.payload.products,
        isLoaded: true,
      };
    },

    addProduct: (state, action) => {
      let currentState = [...current(state).list];
      currentState.push(action.payload.product);

      return {
        isLoaded: true,
        list: currentState,
      };
    },

    deleteProduct: (state, action) => {
      return {
        isLoaded: true,
        list: state.list.filter((el) => el._id !== action.payload._id),
      };
    },

    updateProduct: (state, action) => {
      const productIndex = state.list.findIndex(
        (el) => el._id === action.payload.product._id
      );

      let updatedState = [...current(state).list];
      updatedState[productIndex] = action.payload.product;

      return {
        isLoaded: true,
        list: updatedState,
      };
    },
  },
});

export const { loadProducts, addProduct, deleteProduct, updateProduct } =
  productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const cart = sessionStorage.getItem('cart')
  ? JSON.parse(sessionStorage.getItem('cart'))
  : [];

let { totalAmount, totalQTY } = cart.reduce(
  (cartTotal, cartItem) => {
    const { price, qty } = cartItem;
    const totalPrice = price * qty;

    cartTotal.totalAmount += totalPrice;
    cartTotal.totalQTY += qty;

    return cartTotal;
  },
  {
    totalAmount: 0.0,
    totalQTY: 0,
  }
);

const initialState = {
  cartState: false,
  cartItems: sessionStorage.getItem('cart')
    ? JSON.parse(sessionStorage.getItem('cart'))
    : [],

  cartTotalAmount: totalAmount,
  cartTotalQantity: totalQTY,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product === action.payload.product
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        toast.success(`Se incremento ${action.payload.title}`);
      } else {
        const temp = { ...action.payload, qty: 1 };

        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const totalPrice = price * qty;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += qty;

          return cartTotal;
        },
        {
          totalAmount: 0.0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.product !== action.payload.product
      );

      state.cartItems = removeItem;
      state.cartTotalAmount =
        state.cartTotalAmount - action.payload.price * action.payload.qty;
      state.cartTotalQantity = state.cartTotalQantity - action.payload.qty;

      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product === action.payload.product
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        toast.success(`Se incremento ${action.payload.title}`);
      }
      state.cartTotalAmount = state.cartTotalAmount + action.payload.price;
      state.cartTotalQantity = state.cartTotalQantity + 1;
      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product === action.payload.product
      );

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;
        toast.success(`Se decremento ${action.payload.title}`);
        state.cartTotalAmount = state.cartTotalAmount - action.payload.price;
        state.cartTotalQantity = state.cartTotalQantity - 1;
      }

      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state, action) => {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalQantity = 0;

      toast.success(`Cart Cleared`);
      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    // setGetTotals: (state, action) => {
    //   let { totalAmount, totalQTY } = state.cartItems.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, qty } = cartItem;
    //       const totalPrice = price * qty;

    //       cartTotal.totalAmount += totalPrice;
    //       cartTotal.totalQTY += qty;

    //       return cartTotal;
    //     },
    //     {
    //       totalAmount: 0,
    //       totalQTY: 0,
    //     }
    //   );

    //   state.cartTotalAmount = totalAmount;
    //   state.cartTotalQantity = totalQTY;
    // },
  },
});

export const {
  setLoadCart,
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
} = cartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default cartSlice.reducer;

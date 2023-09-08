import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage, getLocalStorage } from "../utils/localStorage";
import { notifyError, notifySuccess } from "../utils/toast";

const initialState = {
  cart_items: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartTotalDiscount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_to_cart: (state, { payload }) => {
      const isExist = state.cart_items.some((item) => item.id === payload.id);
      if (!isExist) {
        const newItem = {
          ...payload,
          qty: 1,
        };
        state.cart_items.push(newItem);
        notifySuccess(`${payload.title} ${payload.model} добавлен в корзину`);
      } else {
        state.cart_items.map((item) => {
          if (item.id === payload.id) {
            item.qty += 1;
            notifySuccess(
              `${item.qty} экземпляра ${item.title} ${item.model} добавлены в корзину`
            );
          }

          return { ...item };
        });
      }
      setLocalStorage("cart_items", state.cart_items);
    },
    /* increment: (state, { payload }) => {
      state.cart_items.map((item) => {
        if (item.id === payload.id) {
          item.qty += 1;
        }
        notifySuccess(`Вы добавили еще один ${item.title} ${item.model}`);
        return item;
      });
      setLocalStorage("cart_items", state.cart_items);
    }, */
    decrement: (state, { payload }) => {
      const itemIndex = state.cart_items.findIndex(
        (item) => item.id === payload.id
      );
      if (state.cart_items[itemIndex].qty > 1) {
        state.cart_items[itemIndex].qty -= 1;
        notifySuccess(
          `Единица ${payload.title} ${payload.model} удалена из корзины`
        );
      } else if (state.cart_items[itemIndex].qty === 1) {
        const nextCartItems = state.cart_items.filter(
          (i) => i.id !== payload.id
        );
        state.cart_items = nextCartItems;
        notifySuccess(
          `Товар ${payload.title} ${payload.model} удален из корзины`
        );
      }
      setLocalStorage("cart_items", state.cart_items);
    },
    removeItem: (state, { payload }) => {
      state.cart_items = state.cart_items.filter((i) => i.id !== payload.id);
      setLocalStorage("cart_items", state.cart_items);
    },
    clearCart: (state) => {
      const isClearCart = window.confirm(
        "Вы уверены, что хотите очистить корзину?"
      );
      if (isClearCart) {
        state.cart_items = [];
      }
      setLocalStorage("cart_items", state.cart_items);
    },
    get_cart_items: (state, { payload }) => {
      state.cart_items = getLocalStorage("cart_items");
    },
    getTotals: (state) => {
      let { total, quantity, discount } = state.cart_items.reduce(
        (acc, item) => {
          const { price, qty, discount } = item;
          const itemTotalSum = price * qty;
          const itemTotalDiscount = (itemTotalSum / 100) * discount;

          acc.total += itemTotalSum;
          acc.quantity += qty;
          acc.discount += itemTotalDiscount;
          return acc;
        },
        {
          total: 0,
          quantity: 0,
          discount: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      state.cartTotalDiscount = discount;
    },
  },
});

export const {
  add_to_cart,
  increment,
  decrement,
  removeItem,
  get_cart_items,
  clearCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;

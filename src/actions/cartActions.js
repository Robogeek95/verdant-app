// import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_ITEM_UPDATE_QTY,
  CART_REMOVE_ITEM,
  CART_SET,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstant";

export const setCart =
  ({ items }) =>
  async (dispatch) => {
    dispatch({
      type: CART_SET,
      payload: {
        items,
      },
    });
  };

export const addToCart =
  ({ ref, qty = 1, name, image, cost }) =>
  async (dispatch) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        ref,
        name,
        image,
        cost,
        qty,
      },
    });
  };

export const updateCartItemQty =
  ({ ref, type }) =>
  async (dispatch) => {
    dispatch({
      type: CART_ITEM_UPDATE_QTY,
      payload: {
        type,
        ref,
      },
    });
  };

export const removeFromCart =
  ({ ref }) =>
  (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: { ref },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const cartShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

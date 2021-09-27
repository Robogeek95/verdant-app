import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_ITEM_UPDATE_QTY
} from "../constants/cartConstant";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  const item = action.payload;
  const existItemIndex = state.cartItems.findIndex((x) => x.ref === item.ref);

  switch (action.type) {
    case CART_ADD_ITEM:
      if (existItemIndex >= 0) {
        let temp_cart_state = [...state.cartItems];
        let temp_element = { ...temp_cart_state[existItemIndex] };

        temp_element.qty = temp_element.qty + 1;
        temp_cart_state[existItemIndex] = temp_element;

        return { ...state, cartItems: temp_cart_state };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };

    case CART_ITEM_UPDATE_QTY:
      if (item.type === "increment") {
        if (existItemIndex >= 0) {
          let temp_cart_state = [...state.cartItems];
          let temp_element = { ...temp_cart_state[existItemIndex] };

          temp_element.qty = temp_element.qty + 1;
          temp_cart_state[existItemIndex] = temp_element;

          return { ...state, cartItems: temp_cart_state };
        }
      } else if (item.type === "decrement")
        if (existItemIndex >= 0) {
          let temp_cart_state = [...state.cartItems];
          let temp_element = { ...temp_cart_state[existItemIndex] };

          temp_element.qty = temp_element.qty > 0 ? temp_element.qty - 1 : 0;
          temp_cart_state[existItemIndex] = temp_element;

          return { ...state, cartItems: temp_cart_state };
        }
      return { ...state };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;

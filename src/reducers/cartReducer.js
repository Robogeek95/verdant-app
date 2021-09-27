import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_ITEM_UPDATE_QTY,
} from "../constants/cartConstant";

export const cartReducer = (
  state = {
    cartItems: [],
    shippingAddress: {},
    totalQty: 0,
    subTotal: 0,
    deliveryFee: 0,
    total: 0,
  },
  action
) => {
  const item = action.payload;

  switch (action.type) {
    case CART_ADD_ITEM: {
      const existItemIndex = state.cartItems.findIndex(
        (x) => x.ref === item.ref
      );

      if (existItemIndex >= 0) {
        let temp_cart_state = [...state.cartItems];
        let temp_element = { ...temp_cart_state[existItemIndex] };

        temp_element.qty = temp_element.qty + 1;
        temp_cart_state[existItemIndex] = temp_element;

        const totalQty = temp_cart_state.reduce(
          (acc, item) => acc + item.qty,
          0
        );

        const subTotal = temp_cart_state.reduce(
          (acc, item) => item.qty * item.cost + acc,
          0
        );

        const total = subTotal + state.deliveryFee;

        return {
          ...state,
          cartItems: temp_cart_state,
          totalQty,
          subTotal,
          total,
        };
      }

      let temp_cart_state = [...state.cartItems, item];

      const totalQty = temp_cart_state.reduce((acc, item) => acc + item.qty, 0);

      const subTotal = temp_cart_state.reduce(
        (acc, item) => item.qty * item.cost + acc,
        0
      );

      const total = subTotal + state.deliveryFee;

      return {
        ...state,
        cartItems: [...state.cartItems, item],
        totalQty,
        subTotal,
        total,
      };
    }

    case CART_ITEM_UPDATE_QTY: {
      const existItemIndex = state.cartItems.findIndex(
        (x) => x.ref === item.ref
      );

      if (existItemIndex >= 0) {
        let temp_cart_state = [...state.cartItems];
        let temp_element = { ...temp_cart_state[existItemIndex] };

        if (item.type === "increment") {
          temp_element.qty = temp_element.qty + 1;
        } else {
          temp_element.qty = temp_element.qty > 0 ? temp_element.qty - 1 : 0;
        }
        temp_cart_state[existItemIndex] = temp_element;

        const totalQty = temp_cart_state.reduce(
          (acc, item) => acc + item.qty,
          0
        );

        const subTotal = temp_cart_state.reduce(
          (acc, item) => item.qty * item.cost + acc,
          0
        );

        const total = subTotal + state.deliveryFee;

        return {
          ...state,
          cartItems: temp_cart_state,
          totalQty,
          subTotal,
          total,
        };
      }
      return { ...state };
    }

    case CART_REMOVE_ITEM: {
      const temp_cart_state = state.cartItems.filter(
        (x) => x.ref !== item.ref
      );
      const totalQty = temp_cart_state.reduce((acc, item) => acc + item.qty, 0);

      const subTotal = temp_cart_state.reduce(
        (acc, item) => item.qty * item.cost + acc,
        0
      );

      const total = subTotal + state.deliveryFee;

      return {
        ...state,
        cartItems: temp_cart_state,
        totalQty,
        total,
        subTotal,
      };
    }

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

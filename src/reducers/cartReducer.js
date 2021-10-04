import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_ITEM_UPDATE_QTY,
  CART_SET,
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
  const payload = action.payload;

  switch (action.type) {
    case CART_SET: {
      let temp_cart_state = [...payload];

      const totalQty = temp_cart_state.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      const subTotal = temp_cart_state.reduce((acc, item) => {
        console.log(item);
        return item.quantity * item.cost + acc;
      }, 0);

      const total = subTotal + state.deliveryFee;

      return {
        ...state,
        cartItems: temp_cart_state,
        totalQty,
        subTotal,
        total,
      };
    }

    case CART_ADD_ITEM: {
      const existItemIndex = state.cartItems.findIndex(
        (x) => x.ref === payload.ref
      );

      if (existItemIndex >= 0) {
        let temp_cart_state = [...state.cartItems];
        let temp_element = { ...temp_cart_state[existItemIndex] };

        temp_element.quantity = temp_element.quantity + action.payload.quantity;
        temp_cart_state[existItemIndex] = temp_element;

        const totalQty = temp_cart_state.reduce(
          (acc, item) => acc + item.quantity,
          0
        );

        const subTotal = temp_cart_state.reduce(
          (acc, item) => item.quantity * item.cost + acc,
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

      let temp_cart_state = [...state.cartItems, payload];

      const totalQty = temp_cart_state.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      const subTotal = temp_cart_state.reduce(
        (acc, item) => item.quantity * item.cost + acc,
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

    case CART_ITEM_UPDATE_QTY: {
      const existItemIndex = state.cartItems.findIndex(
        (x) => x.ref === payload.ref
      );

      if (existItemIndex >= 0) {
        let temp_cart_state = [...state.cartItems];
        let temp_element = { ...temp_cart_state[existItemIndex] };

        if (payload.type === "increment") {
          temp_element.quantity = temp_element.quantity + 1;
        } else {
          temp_element.quantity =
            temp_element.quantity > 0 ? temp_element.quantity - 1 : 0;
        }
        temp_cart_state[existItemIndex] = temp_element;

        const totalQty = temp_cart_state.reduce(
          (acc, item) => acc + item.quantity,
          0
        );

        const subTotal = temp_cart_state.reduce(
          (acc, item) => item.quantity * item.cost + acc,
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
        (x) => x.ref !== payload.ref
      );
      const totalQty = temp_cart_state.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      const subTotal = temp_cart_state.reduce(
        (acc, item) => item.quantity * item.cost + acc,
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

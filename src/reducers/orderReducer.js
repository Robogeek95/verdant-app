import {
  LIST_ORDER_FAIL,
  LIST_ORDER_REQUEST,
  LIST_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
} from "../constants/orderConstants";

export const orderReducer = (
  state = {
    orders: [],
    loading: false,
    error: "",
    deleting: false,
    deleteError: "",
    deleted: false,
  },
  action
) => {
  switch (action.type) {
    // list
    case LIST_ORDER_REQUEST:
      return { loading: true, orders: [...state.orders] };
    case LIST_ORDER_SUCCESS:
      return { loading: false, orders: action.payload };
    case LIST_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
        orders: [...state.orders],
      };

    // delete
    case DELETE_ORDER_REQUEST: {
      return {
        deleting: true,
        deleted: true,
        orders: [...state.orders],
      };
    }
    case DELETE_ORDER_SUCCESS:
      let orders = [...state.orders];
      const existItemIndex = orders.findIndex(
        (data) => data.ref === action.payload
      );

      orders.splice(existItemIndex, 1);

      return {
        deleting: false,
        orders,
      };
    case DELETE_ORDER_FAIL:
      return {
        deleting: false,
        deleteError: action.payload,
        orders: [...state.orders],
      };

    default:
      return state;
  }
};

// import axios from "axios";
import {
  LIST_ORDER_FAIL,
  LIST_ORDER_REQUEST,
  LIST_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
} from "../constants/orderConstants";
import { listOrderService, deleteOrderService } from "../utilities/services";

export const listOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ORDER_REQUEST,
    });

    const { data } = await listOrderService();

    dispatch({
      type: LIST_ORDER_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: LIST_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteOrder = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ORDER_REQUEST,
    });

    deleteOrderService(payload).then(() => {
      dispatch({
        type: DELETE_ORDER_SUCCESS,
        payload,
      });
    });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// import axios from "axios";
import {
  ADD_INVOICE_FAIL,
  ADD_INVOICE_REQUEST,
  ADD_INVOICE_SUCCESS,
  LIST_INVOICE_FAIL,
  LIST_INVOICE_REQUEST,
  LIST_INVOICE_SUCCESS,
  DELETE_INVOICE_FAIL,
  DELETE_INVOICE_REQUEST,
  DELETE_INVOICE_SUCCESS,
} from "../constants/invoiceConstants";
import {
  addInvoiceService,
  listInvoiceService,
  deleteInvoiceService,
} from "../utilities/services";

export const addInvoice = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_INVOICE_REQUEST,
    });

    const { data } = await addInvoiceService(payload);

    dispatch({
      type: ADD_INVOICE_SUCCESS,
      payload: data.invoice,
    });
  } catch (error) {
    dispatch({
      type: ADD_INVOICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listInvoice = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_INVOICE_REQUEST,
    });

    const { data } = await listInvoiceService();

    dispatch({
      type: LIST_INVOICE_SUCCESS,
      payload: data.invoice,
    });
  } catch (error) {
    dispatch({
      type: LIST_INVOICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteInvoice = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_INVOICE_REQUEST,
    });

    deleteInvoiceService(payload).then(() => {
      dispatch({
        type: DELETE_INVOICE_SUCCESS,
        payload,
      });
    });
  } catch (error) {
    dispatch({
      type: DELETE_INVOICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

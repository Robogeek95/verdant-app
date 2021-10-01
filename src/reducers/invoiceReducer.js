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

export const invoiceReducer = (
  state = {
    invoices: [],
    loading: false,
    error: "",
    adding: false,
    addError: "",
    deleting: false,
    deleteError: "",
  },
  action
) => {
  switch (action.type) {
    // list
    case LIST_INVOICE_REQUEST:
      return { loading: true, invoices: [...state.invoices] };
    case LIST_INVOICE_SUCCESS:
      return { loading: false, invoices: action.payload };
    case LIST_INVOICE_FAIL:
      return {
        loading: false,
        error: action.payload,
        invoices: [...state.invoices],
      };

    // add
    case ADD_INVOICE_REQUEST:
      return {
        adding: true,
        invoices: [...state.invoices],
      };
    case ADD_INVOICE_SUCCESS:
      return {
        adding: false,
        invoices: [...state.invoices, action.payload],
      };
    case ADD_INVOICE_FAIL:
      return {
        adding: false,
        addError: action.payload,
        invoices: [...state.invoices],
      };

    // delete
    case DELETE_INVOICE_REQUEST: {
      return {
        deleting: true,
        invoices: [...state.invoices],
      };
    }
    case DELETE_INVOICE_SUCCESS:
      let invoices = [...state.invoices];
      const existItemIndex = invoices.findIndex(
        (data) => data.ref === action.payload
      );

      console.log({ existItemIndex });

      invoices.splice(existItemIndex, 1);

      return {
        deleting: false,
        invoices,
      };
    case DELETE_INVOICE_FAIL:
      return {
        deleting: false,
        deleteError: action.payload,
        invoices: [...state.invoices],
      };

    default:
      return state;
  }
};

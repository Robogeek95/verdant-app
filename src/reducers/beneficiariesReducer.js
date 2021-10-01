import {
  ADD_BENEFICIARY_FAIL,
  ADD_BENEFICIARY_REQUEST,
  ADD_BENEFICIARY_SUCCESS,
  LIST_BENEFICIARIES_FAIL,
  LIST_BENEFICIARIES_REQUEST,
  LIST_BENEFICIARIES_SUCCESS,
  DELETE_BENEFICIARY_FAIL,
  DELETE_BENEFICIARY_REQUEST,
  DELETE_BENEFICIARY_SUCCESS,
} from "../constants/beneficiaryConstants";

export const beneficiariesDataReducer = (
  state = {
    beneficiaries: [],
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
    case LIST_BENEFICIARIES_REQUEST:
      return { loading: true, beneficiaries: [...state.beneficiaries] };
    case LIST_BENEFICIARIES_SUCCESS:
      return { loading: false, beneficiaries: action.payload };
    case LIST_BENEFICIARIES_FAIL:
      return {
        loading: false,
        error: action.payload,
        beneficiaries: [...state.beneficiaries],
      };

    // add
    case ADD_BENEFICIARY_REQUEST:
      return {
        adding: true,
        beneficiaries: [...state.beneficiaries],
      };
    case ADD_BENEFICIARY_SUCCESS:
      return {
        adding: false,
        beneficiaries: [...state.beneficiaries, action.payload],
      };
    case ADD_BENEFICIARY_FAIL:
      return {
        adding: false,
        addError: action.payload,
        beneficiaries: [...state.beneficiaries],
      };

    // delete
    case DELETE_BENEFICIARY_REQUEST: {
      return {
        deleting: true,
        beneficiaries: [...state.beneficiaries],
      };
    }
    case DELETE_BENEFICIARY_SUCCESS:
      let beneficiaries = [...state.beneficiaries];
      const existItemIndex = beneficiaries.findIndex(
        (data) => data.ref === action.payload
      );

      console.log({ existItemIndex });

      beneficiaries.splice(existItemIndex, 1);

      return {
        deleting: false,
        beneficiaries,
      };
    case DELETE_BENEFICIARY_FAIL:
      return {
        deleting: false,
        deleteError: action.payload,
        beneficiaries: [...state.beneficiaries],
      };

    default:
      return state;
  }
};

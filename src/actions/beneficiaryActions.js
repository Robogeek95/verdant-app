// import axios from "axios";
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
import {
  AddBeneficiaryService,
  ListBeneficiariesService,
  deleteBeneficiaryService,
} from "../utilities/services";

export const addBeneficiary = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_BENEFICIARY_REQUEST,
    });

    const { data } = await AddBeneficiaryService(payload);

    dispatch({
      type: ADD_BENEFICIARY_SUCCESS,
      payload: data.beneficiary,
    });
  } catch (error) {
    dispatch({
      type: ADD_BENEFICIARY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBeneficiaries = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_BENEFICIARIES_REQUEST,
    });

    const { data } = await ListBeneficiariesService();

    dispatch({
      type: LIST_BENEFICIARIES_SUCCESS,
      payload: data.beneficiary,
    });
  } catch (error) {
    dispatch({
      type: LIST_BENEFICIARIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteBeneficiary = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_BENEFICIARY_REQUEST,
    });

    deleteBeneficiaryService(payload).then(() => {
      dispatch({
        type: DELETE_BENEFICIARY_SUCCESS,
        payload,
      });
    });
  } catch (error) {
    dispatch({
      type: DELETE_BENEFICIARY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

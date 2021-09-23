import axios from 'axios';

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productContants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})

    const { data } = await axios.get('https://fakestoreapi.com/products?limit=6')
    // const { data } = await axios.get('https://verdant-store.herokuapp.com/product/catalog')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}


export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST})

    // const { data } = await axios.get(`https://verdant-store.herokuapp.com/product/catalog/${ref}`)
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)

   

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
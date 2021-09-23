import axios from 'axios'
import { CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from '../constants/categoriesContant'


export const getCategories = () => async (dispatch) => {
  try {
    dispatch({type: CATEGORIES_REQUEST})

    const { data } = await axios.get('https://verdant-store.herokuapp.com/product/categories')
    console.log(data.categories)

    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

getCategories();

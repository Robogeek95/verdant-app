import { CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from "../constants/categoriesContant";

export const categoriesReducer = (state = { categoryItems: [] }, action ) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { loading: true, categoryItems: [] }
    case CATEGORIES_SUCCESS:
      return { loading: false, categoryItems: action.payload}   
    case CATEGORIES_FAIL:
      return { loading: false, error: action.payload }   
    default: 
      return state  
  }
}
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import { categoriesReducer } from "./reducers/categoriesReducers";
import { beneficiariesDataReducer } from "./reducers/beneficiariesReducer";
import { invoiceReducer } from "./reducers/invoiceReducer";
import { orderReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updateUser: userUpdateProfileReducer,
  categories: categoriesReducer,
  beneficiaries: beneficiariesDataReducer,
  invoices: invoiceReducer,
  orders: orderReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    // cartItems: userInfoFromStorage
    //   ? getCartItemsFromDB()
    //   : cartItemsFromStorage,
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    total: 0,
    subTotal: 0,
    deliveryFee: 0,
    totalQty: 0,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Slider from "./components/layouts/Slider";
import "./css/App.css";
import BillPayments from "./components/products/billsPayment/BillPayments";
import Groceries from "./components/products/groceries/Groceries";
import GroceryDetail from "./components/products/groceries/GroceryDetail";
import Cart from "./components/products/groceries/Cart";
import CryptoPayment from "./components/products/billsPayment/CryptoPayment";
import InvoiceUpload from "./components/products/invoiceUpload/InvoiceUpload";
import Checkout from "./components/products/checkout/Checkout";
import Section from "./components/layouts/section/Section";
import About from "./components/layouts/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import SavedItems from "./components/SavedItems";

import "react-toastify/dist/ReactToastify.css";
import { fetchCartItems, fetchProduct } from "./utilities/services";
import { setCart } from "./actions/cartActions";
import handleApiError from "./utilities/handleApiError";
// import formatApiError from "./utilities/formatAPIError";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const App = ({ setCart, userLogin }) => {
  const { userInfo } = userLogin;

  useEffect(() => {
    // Todo: check if userInfo
    if (!userInfo) {
      fetchCartItems()
        .then(async (res) => {
          let items = res.data.cart;

          // update items cost
          let updatedProducts = Promise.all(
            items.map(async (item) => {
              const res = await fetchProduct(item.product_ref);
              item = { ...item, cost: res.data.product.cost };

              return item;
            })
          );

          console.log(updatedProducts);

          let payload = {
            items: await updatedProducts,
          };
          setCart(payload);
        })
        .catch((error) => {
          handleApiError(error);
          // let message = formatApiError(error);
        });
      }
  
  }, [userInfo]);

  return (
    <Router>
      <Header />
      <Route path="/" component={Slider} exact />
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgetpassword" component={ForgetPassword}/>
          <Route path="/" component={Section} exact />

          <Route path="/cart/:id?" component={Cart} />

          <Route path="/products/billPayment" component={BillPayments} />
          <Route
            path="/products/billPayment/crypto"
            component={CryptoPayment}
          />
          <Route path="/products/invoiceUpload" component={InvoiceUpload} />
          <Route path="/products/checkout" component={Checkout} />
          <Route path="/products/groceries/:ref" component={GroceryDetail} />
          <Route path="/products/:category" component={Groceries} />

          <Route path="/help/faq" component={FAQ} />
          <Route path="/help/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/orders" component={Orders} />
          <Route path="/saved-items" component={SavedItems} />

          <Route path="/about" component={About} />
        </Switch>
      </main>
      <Footer />

      {/* <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact /> */}
    </Router>
  );
};

function mapStateToProps(state) {
  return { cart: state.cart, userLogin: state.userLogin };
}

const mapDispatchToProps = {
  setCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  setCart: PropTypes.func,
  userLogin: PropTypes.object,
};

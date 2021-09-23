import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Slider from './components/layouts/Slider'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import BillPayments from './components/products/billsPayment/BillPayments';
import Groceries from './components/products/groceries/Groceries';
import GroceryDetail from './components/products/groceries/GroceryDetail';
import Cart from './components/products/groceries/Cart';
import { Container } from 'react-bootstrap';
import CryptoPayment from './components/products/billsPayment/CryptoPayment';
import InvoiceUpload from './components/products/invoiceUpload/InvoiceUpload';
import Checkout from './components/products/checkout/Checkout';
import Section from './components/layouts/section/Section';
import About from './components/layouts/About';
import React from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Orders from './components/Orders';
import SavedItems from './components/SavedItems';



const  App = () => {

  return (
    <Router>
      <Header />
      <Route path="/" component={Slider} exact />
      <main>
        
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Container>
          <Route path="/" component={Section} exact />
          <Route path="/products/groceries" component={Groceries} />
          
          <Route path="/groceries/:id" component={GroceryDetail} />
          <Route path="/cart/:id?" component={Cart} />

          <Route path="/products/billPayment" component={ BillPayments } />
          <Route path="/products/billPayment/crypto" component={ CryptoPayment } />
          <Route path="/products/invoiceUpload" component={ InvoiceUpload } />
          <Route path="/products/checkout" component={ Checkout } />
          <Route path="/help/faq" component={FAQ} />
          <Route path="/help/contact" component={Contact} />        
          <Route path="/profile"  component={Profile} />
          <Route path="/orders"  component={Orders} />
          <Route path="/saved-items"  component={SavedItems} />

        </Container>
        <Route path="/about"  component={About}/>
      </main>
      <Footer />

      {/* <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact /> */}
    </Router>
  );
}

export default App;

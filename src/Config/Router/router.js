import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home ,Shop,ProductDetail,ViewCart,Checkout,AdminLogin,AdminHome,AddProduct,EditProduct,UserRegistration,UserLogin} from '../../Containers'
import History from '../History/History'
function BasicExample() {
  return (
    <Router history={History} >
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/product" component={ProductDetail} />
        <Route path="/viewcart" component={ViewCart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" component={AdminLogin} />
        <Route path="/dashboard" component={AdminHome} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/edit-product" component={EditProduct} />
        <Route path="/signup" component={UserRegistration} />
        <Route path="/login" component={UserLogin} />
 
    </Router>
  );
}
export default BasicExample;
import React from "react";
import { Route, Switch } from "react-router-dom";
import OrdersPage from "./orders/OrdersPage";
//import ProductPage from "./products/ProductsPage";

import Header from "./common/Header";

//import ManageAccountPage from "./accounts/ManageAccountPage"; // eslint-disable-line import/no-named-as-default 
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsPage from "./products/ProductsPage";
import PayPage from "./pay/PayPage";
import PurchasePage from "./purchase/PurchasePage";
import Login from "./login/LoginPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={ProductsPage} /> 
        <Route exact path="/ProductsPage" component={ProductsPage} /> 
        <Route path="/purchase" component={PurchasePage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/pay" component={PayPage} />
        <Route path="/login" component={Login} />   

        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;

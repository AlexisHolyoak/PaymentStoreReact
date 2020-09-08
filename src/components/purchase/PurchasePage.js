import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import * as orderActions from "../../redux/actions/orderActions";
import * as purchaseActions from "../../redux/actions/purchaseActions";
import PropTypes from "prop-types";
import PurchaseList from "./PurchaseList";
import { toast } from "react-toastify";

class PurchasePage extends React.Component{
  state = {
    redirectToAddPurchasePage: false
  };

  componentDidMount() {
    const { orders, purchases, actions} = this.props;
    
    if (orders.length === 0) {
      console.log("hola orders");
    }

    if (purchases.length === 0) {
      console.log("hola purchases");
    }
  }

  handlePurchase = async purchase =>{
    toast.success("Order registered");
    console.log("prueba de purchase");

    const data = {customerId:"10"};
    let products =[];
    const data1 = {productId:"",quantity:1};
    console.log(purchase);
    purchase.map(c=>{
      console.log(data1);
      data1.productId=c.productId;
      products.push(data1);
    });
    data.products=products;
    console.log(data);

    try {
      await this.props.actions.savePurchase(data);
      
    } catch (error) {
      toast.error("add failed. " + error.message, { autoClose: false });
    }
  }; 

  handleQuantity = async valor=>{
    console.log("el valor es "+ valor);
  }

  render() {
    console.log(this.props.orders);
    return (
      <>
      <br/>
      <h3>Shoping cart </h3>
      <br/>
       
                <PurchaseList
                  orders={this.props.orders}
                  onPurchaseClick ={this.handlePurchase}
                  onPurchaseChange = {this.handleQuantity}
                 
                />
       
      </>
    );
}
}

PurchasePage.propTypes = {
  orders: PropTypes.array.isRequired,
  purchases: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products,
    orders: state.orders,
    purchases: state.purchases,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      savePurchase: bindActionCreators(purchaseActions.savePurchase,dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchasePage)

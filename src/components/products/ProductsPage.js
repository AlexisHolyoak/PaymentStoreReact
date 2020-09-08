import React from "react";
import Container from 'react-bootstrap/Container'
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as orderActions from "../../redux/actions/orderActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
//import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const arrCard = [];
class ProductsPage extends React.Component {


  state = {
    redirectToAddProductPage: false
  };

  componentDidMount() {
    const { products, orders, actions } = this.props;

    console.log(orders);
    if (products.length === 0) {
      actions.getProducts().catch(error => {
        alert("Loading products failed" + error);
      });
    }

    if (orders.length === 0) {
      console.log("hola orders");
      /*actions.getOrders().catch(error => {
        alert("Loading orders failed" + error);
      });*/
    }

  }

  handleAddOrder = async product => {
    toast.success("Added to cart");
    try {
      await this.props.actions.saveOrder(product);
    } catch (error) {
      toast.error("add failed. " + error.message, { autoClose: false });
    }
    /*if (arrCard.find(a=>a===`${product.productId}`)){
      console.log("ya existe");
      
    }else{
      arrCard.push(`${product.productId}`);
      console.log(`agregando pedidoStock: ${product.productId}`);
      console.log(arrCard);
    }*/
  };

  handleDeleteOrder = async product => {
    toast.success("Product removed");
    try {
      await this.props.actions.deleteOrder(product);
    } catch (error) {
      toast.error("delete failed. " + error.message, { autoClose: false });
    }
    /*if (arrCard.find(a => a === `${product.productId}`)) {
      var index = arrCard.indexOf(`${product.productId}`);
      arrCard.splice(index, 1);
      console.log("elemento eliminado");

    } else {
      console.log("elemento no encontrado");
    }*/
  };

  render() {
    console.log(this.props);
    return (
      <>
      <Container>
        <br></br>
        <h3>Products</h3>
        <br></br>
        {this.props.loading ? (
          
          <>
              <div className="card-deck">
                <ProductList
                  products={this.props.products}
                  orders={this.props.orders}
                  onAddCardClick={this.handleAddOrder}
                  onRemoveCardClick={this.handleDeleteOrder}
                />
              </div>
            </>
        ) : (
            <>
              <div className="card-deck">
                <ProductList
                  products={this.props.products}
                  orders={this.props.orders}
                  onAddCardClick={this.handleAddOrder}
                  onRemoveCardClick={this.handleDeleteOrder}
                />
              </div>
            </>
          )}
          </Container>
      </>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products,
    orders: state.orders,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      
      saveOrder: bindActionCreators(orderActions.saveOrder,dispatch),
      deleteOrder: bindActionCreators(orderActions.deleteOrder,dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);



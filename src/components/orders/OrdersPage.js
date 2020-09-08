import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../../redux/actions/orderActions";
import PropTypes from "prop-types";
import OrderList from "./OrderList";
import { toast } from "react-toastify";

class OrdersPage extends React.Component{
  state = {
    redirectToAddPurchasePage: false
  };

  componentDidMount() {
    const { ordersR, actions} = this.props;
    
    if (ordersR.length === 0) {
      actions.getOrders().catch(error => {
        alert("Loading orders failed" + error);
      });
    }

  }

  render() {
    return (
      <>
      <br/>
      <h3>My Orders </h3>
      <br/>
                <OrderList
                  ordersR={this.props.ordersR}/>
                 
      </>
    );
}
}

OrdersPage.propTypes = {
  ordersR: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    ordersR: state.ordersR,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getOrders: bindActionCreators(orderActions.getOrders,dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage)

import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import * as orderActions from "../../redux/actions/orderActions";
import * as purchaseActions from "../../redux/actions/purchaseActions";
import PropTypes from "prop-types";
import PayForm from "./PayForm";
import { toast } from "react-toastify";

class PayPage extends React.Component{
  state = {
    redirectToAddPurchasePage: false
  };

  componentDidMount() {
    toast.success("Purchase success");
  }

  purchaseSuccess (){
    toast.success("Purchase success");
  }

  render() {
    console.log(this.props.orders);
    return (
      <>
      <br/>
      <h3>Make payment </h3>
      <br/>
       
                <PayForm
                  purchaseSuccess={this.purchaseSuccess}
                 
                />
       
      </>
    );
}
}

PayPage.propTypes = {
  
};

function mapStateToProps(state) {
  return {
    creditCards: state.creditCards,
    purchases: state.purchases,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PayPage)

import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form'

const PurchaseList = ({ orders, onPurchaseClick, onPurchaseChange }) => (
  
  <div className="row">
    
    {orders.map(order => {
     
      return (
        
        <div className="card col-md-3 mr-2" style={{ width: '18rem' }} key={order.productId} >
          <img src={"http://lorempixel.com/350/230/technics"} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{order.description}</h5>
            <p className="card-text">Quantity</p>
            <Form.Control type="number" id="cmbCantidad" placeholder='1' onChange={() => onPurchaseChange("1")} required />
            <p className="card-text">{`Precio: S/. ${order.price}`}</p>

          </div>
        </div>
        
      );
    })}

    <div className="col-md-12">
      <br/>
    <button type="button" className="btn btn-primary" onClick={() => onPurchaseClick(orders)}>
      Generar Pedido</button>
    </div>
    
    </div>
)

PurchaseList.propTypes = {
  orders: PropTypes.array.isRequired,
  onPurchaseClick: PropTypes.func.isRequired,
  onPurchaseChange: PropTypes.func.isRequired
}

export default PurchaseList;
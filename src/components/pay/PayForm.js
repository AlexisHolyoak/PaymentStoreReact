import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { createPurchaseSuccess } from "../../redux/actions/purchaseActions";

const PayForm = ({ purchaseSuccess }) => (
  
  <div className="row ">
    
    
        
        <div className="card col-md-6 m-auto" style={{ width: '18rem' }} >
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhKbBK4ivXP3xofJkHMnwtQ5-gyee8lz1ZUPMjpXkfDTH_7U5j"} className="card-img-top mt-3" alt="..."></img>
          <div className="card-body">
            <div className="form-group">
              <label className="">Card Number</label> 
              <input type="text" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx"></input>
            </div>
            <div className="form-group">
              <label className="">Name on Card</label> 
              <input type="text" className="form-control" placeholder="Name on Card"></input>
            </div>
            <div className="form-group row" >
            <div className=" col-md-6" >
              <label className="">Expiry date</label> 
              <input type="text" className="form-control" placeholder="mm/yy"></input>
            </div>
            <div className="col-md-6" >
              <label className="">Security code</label> 
              <input type="text" className="form-control" placeholder="****"></input>
            </div>
            </div>
            <div className="form-group">
            <button type="button" className="btn btn-primary " onClick={() => purchaseSuccess()}>
      Make Payment</button>
    </div>
            </div>
          </div>
        </div>
     

)

PayForm.propTypes = {
  
}

export default PayForm;
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrderList = ({ ordersR}) => (
  <table className="table">
    <thead>
      <tr>
        <th>Order Id</th>
        <th>Register date</th>
        <th>State</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {ordersR.map(orderR => {
        return (
          <tr key={orderR.orderId}>
            <td>
              <Link to={"/pay/" + orderR.orderId}>{orderR.orderId}</Link>
            </td>
            <td>{orderR.orderDate}</td>
            <td>REGISTERED</td>
            <td>
            <Link to="/pay" className="btn btn-primary">Pay</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

OrderList.propTypes = {
  ordersR: PropTypes.array.isRequired
};

export default OrderList;

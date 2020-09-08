import React from "react";
import PropTypes from "prop-types";


const ProductList = ({ products, orders, onAddCardClick, onRemoveCardClick }) => (

  <div className="card-deck">
    {products.map(product => {
      return (
        <div className="card" style={{ width: '18rem' }} key={product.productId} >
          <img src={"http://lorempixel.com/350/230/technics"} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{product.description}</h5>
            <p className="card-text">{`Stock: ${product.stock}`}</p>
            <p className="card-text">{`Precio: S/. ${product.price}`}</p>
            {
              orders.find(a => a.productId === product.productId)
                ?
                <button type="button" className="btn btn-secondary" onClick={() => onRemoveCardClick(product)}>
                remove from cart</button>
                :
                <button type="button" className="btn btn-primary" onClick={() => onAddCardClick(product)}>
                Add to cart</button>
            }
          </div>
        </div>
      );
    })}
  </div>
)

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
  onAddCardClick: PropTypes.func.isRequired,
  onRemoveCardClick: PropTypes.func.isRequired
}

export default ProductList;

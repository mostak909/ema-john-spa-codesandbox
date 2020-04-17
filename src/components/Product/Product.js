import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = props => {
  // console.log(props);
  const {
    name,
    img,
    price,
    seller,
    stock,
    star,
    features,
    key
  } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <div>
          <h4>{name}</h4>
        </div>
        <div className="product-info">
          <div>
            <p>
              <small>by: {seller}</small>
            </p>
            <h4>${price}</h4>
            <p>Only: {stock} Left in Stock - Order Soon </p>
            <button className="main-button" 
              onClick={() => props.handleAddProduct(props.product)}>
              <FontAwesomeIcon icon={faShoppingCart} />
              ...Add to Cart
            </button>
          </div>
          <div className="product-key">
            <p>Star: {star}</p>
            <br />
            <p>Product Key: {key}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;

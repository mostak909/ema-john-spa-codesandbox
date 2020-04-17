import React from "react";

const Cart = props => {
  const cart = props.cart;
  // const total = cart.reduce((total, prod) => total + prod.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  let shipping = 0;
  if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const forNumber = num => {
    const decimal = num.toFixed(2);
    return Number(decimal);
  };

  const tax = total / 10;
  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Ordered:{cart.length}</p>
      <p>Shipping: {shipping} </p>
      <p>Tax Vat: {tax} </p>
      <p>Product Price: {total} </p>
      <p>Total Price: {total + shipping} </p>
    </div>
  );
};

export default Cart;

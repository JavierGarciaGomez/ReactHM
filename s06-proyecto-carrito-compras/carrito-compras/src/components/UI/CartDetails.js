import React, { Component } from "react";

export class CartDetails extends Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <div className="cart-details">
        <ul>
          {shoppingCart.map((element) => {
            return (
              <li key={element.name} className="product-list">
                <img src={element.img} widht="50" height="32" />
                {element.name} <span>{element.qty}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CartDetails;

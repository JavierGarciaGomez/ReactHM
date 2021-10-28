// 49
import React, { Component } from "react";
import BubbleAlert from "./UI/BubbleAlert";
import CartDetails from "./UI/CartDetails";

export class ShoppingCart extends Component {
  render() {
    const { shoppingCart, toggleCar, showCar } = this.props;

    //   {value} = this.props

    const value = shoppingCart.reduce((acc, element) => acc + element.qty, 0);
    return (
      <div>
        <span className="bubble">
          {value > 0 && <BubbleAlert value={value} />}
        </span>
        <button className="shoppingCart" onClick={toggleCar}>
          Carro
        </button>
        {showCar && <CartDetails shoppingCart={shoppingCart} />}
      </div>
    );
  }
}

export default ShoppingCart;

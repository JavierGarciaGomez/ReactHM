// 47
import React, { Component } from "react";

import ShoppingCart from "../ShoppingCart";
import Logo from "./Logo";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo></Logo>
        <ShoppingCart
          shoppingCart={this.props.shoppingCart}
          toggleCar={this.props.toggleCar}
          showCar={this.props.showCar}
        />
      </nav>
    );
  }
}

export default Navbar;

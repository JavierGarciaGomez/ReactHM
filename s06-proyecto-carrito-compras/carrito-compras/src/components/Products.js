// 42
import React, { Component } from "react";
import Product from "./Product";

export default class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div className="products">
        {products.map((product) => (
          <Product
            addToCart={addToCart}
            key={product.name}
            product={product}
          ></Product>
        ))}
      </div>
    );
  }
}

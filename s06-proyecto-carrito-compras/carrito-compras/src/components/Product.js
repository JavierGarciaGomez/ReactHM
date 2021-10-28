// 42
import React, { Component } from "react";
import Button from "./UI/Button";

export class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div className="product">
        <img alt={product.name} src={product.img} />
        <h3>{product.name}</h3>
        <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>

        <p>{product.price}</p>
      </div>
    );
  }
}

export default Product;

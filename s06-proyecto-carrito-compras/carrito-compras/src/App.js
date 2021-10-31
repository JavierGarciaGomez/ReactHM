// ..., 42, 45
import React, { Component, useEffect, useState } from "react";
import Products from "./components/Products";
import Title from "./components/Title";
import Layout from "./components/UI/Layout";
import Navbar from "./components/UI/Navbar";

export default class App extends Component {
  state = {
    products: [
      { name: "Tomate", price: 0.5, img: "./productos/tomate.jpg" },
      { name: "Arbejas", price: 2.0, img: "./productos/arbejas.jpg" },
      { name: "Lechuga", price: 1.5, img: "./productos/lechuga.jpg" },
    ],

    shoppingCart: [
      // { name: "Tomate", price: 0.5, img: "./productos/tomate.jpg", qty: 1 },
    ],

    isVisibleCar: false,
  };

  addToCart = (product) => {
    const { shoppingCart } = this.state;
    if (shoppingCart.find((element) => element.name === product.name)) {
      const newShoppingCart = shoppingCart.map((scProduct) =>
        scProduct.name === product.name
          ? { ...scProduct, qty: scProduct.qty + 1 }
          : scProduct
      );

      return this.setState({ shoppingCart: newShoppingCart });
    }
    return this.setState({
      shoppingCart: this.state.shoppingCart.concat({ ...product, qty: 1 }),
    });
  };

  toggleCar = () => {
    this.setState({ isVisibleCar: !this.state.isVisibleCar });
  };

  render() {
    return (
      <div>
        <Navbar
          shoppingCart={this.state.shoppingCart}
          toggleCar={this.toggleCar}
          showCar={this.state.isVisibleCar}
        />
        <Layout>
          <Title></Title>
          <Products
            products={this.state.products}
            addToCart={this.addToCart}
          ></Products>
        </Layout>
      </div>
    );
  }
}

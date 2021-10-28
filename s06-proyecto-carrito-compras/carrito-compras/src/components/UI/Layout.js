// 45
import React, { Component, Fragment } from "react";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div className="layout">
          <div className="container">{this.props.children}</div>
          lala
        </div>
        lala
      </Fragment>
    );
  }
}

export default Layout;

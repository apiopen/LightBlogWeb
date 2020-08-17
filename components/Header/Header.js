import React, { Component } from "react";
import Link from "next/link";
import header from "./header.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = { title };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="header-container">
        <span className={header.colorStyle}>头部组件</span>
      </div>
    );
  }
}

export default Header;

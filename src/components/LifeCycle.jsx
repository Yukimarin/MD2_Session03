import React, { Component } from "react";

export default class LifeCycle extends Component {
  // B1: Để khởi tạo thì sử dụng constructor
  constructor(props) {
    super(props);
    console.log("1. Component được khởi tạo");
  }

  //  B2: Demo componentWillMount()
  componentWillMount() {
    console.log("2.ComponentWillMount");
  }

  //   Khi thay đổi props
  componentWillReceiveProps(nextProps) {
    console.log("5.ComponentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate() {
    console.log("6. ShouldComponentUpdate");
    return false;
  }

  componentWillUpdate() {
    console.log("7.ComponentWillUpdate");
  }

  componentDidUpdate() {
    console.log("8.ComponentDidUpdate");
  }
  render() {
    console.log("3.Render");
    return <div>Đây là Life Cycle Component</div>;
  }

  //  Demo componentDidMount
  componentDidMount() {
    console.log("4.ComponentDidMount");
  }
}

import React, { Component } from "react";
import FormComp from "./components/FormComp";
// import LifeCycle from "./components/LifeCycle";

export default class App extends Component {
  // constructor() {
  //   super();
  //   // Khởi tạo trạng thái
  //   this.state = {
  //     name: "Rikkei Academy",
  //   };
  // }
  // handleChangeProps = () => {
  //   this.setState({
  //     name: "Học viện đào tạo lập trình RA",
  //   });
  // };
  render() {
    return (
      <div>
        {/* Demo LifyCycle  */}
        {/* <LifeCycle title={this.state.name}></LifeCycle>
        <button onClick={this.handleChangeProps}>Change Props</button> */}
        <FormComp></FormComp>
      </div>
    );
  }
}

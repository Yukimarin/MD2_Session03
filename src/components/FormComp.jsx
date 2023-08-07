import React, { Component } from "react";

export default class FormComp extends Component {
  constructor() {
    super();
    // Khởi tạo state để lưu trữ dữ liệu form
    this.state = {
      studentId: "",
      studentName: "",
      pass: "",
      gender: "",
      age: "",
      address: "",
    };
  }
  //   Khởi tạo hàm handleChange
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log("handleChange", name, value);
    this.setState({
      [name]: value,
    });
  };

  //  Khởi tạo hàm handleSubmit
  handleSubmit = (e) => {
    // Ngăn hành động mặc định của trình duyệt khi submit trong form
    e.preventDefault();
    // console.log("StudentID", this.state.studentId);
    // console.log("StudentName", this.state.studentName);
    // console.log("Pass", this.state.pass);
    // console.log("Gender", this.state.gender);
    // console.log("Age", this.state.age);
    // console.log("Address", this.state.address);
    let formData = {
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      pass: this.state.pass,
      gender: this.state.gender,
      age: this.state.age,
      address: this.state.address,
    };
    console.log("FormData", formData);
    // Cập nhật lại state và xóa dữ liệu input trong form
    this.setState({
      studentId: "",
      studentName: "",
      pass: "",
      gender: "",
      age: "",
      address: "",
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        {/* name là submit lên server còn id là submit ở phía client */}
        <form action=''>
          <div>
            StudentID:{" "}
            <input
              type='text'
              name='studentId'
              id='studentId'
              value={this.state.studentId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            StudentName:
            <input
              type='text'
              name='studentName'
              id='studentName'
              value={this.state.studentName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Password:
            <input
              type='password'
              name='pass'
              id='pass'
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Gender: Nam{" "}
            <input
              type='radio'
              name='gender'
              id='male'
              value='Nam'
              onChange={this.handleChange}
            />
            Nữ{" "}
            <input
              type='radio'
              name='gender'
              id='female'
              value='Nữ'
              onChange={this.handleChange}
            />
          </div>
          <div>
            Age:{" "}
            <input
              type='number'
              name='age'
              id='age'
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Address:
            <select
              name='address'
              id='address'
              value={this.state.address}
              onChange={this.handleChange}
            >
              <option value='HN'> Hà Nội</option>
              <option value='ĐN'> Đà Nẵng</option>
              <option value='HCM'> Hồ Chí Minh</option>
            </select>
          </div>
          <button onClick={this.handleSubmit}> Submit</button>
        </form>
      </div>
    );
  }
}

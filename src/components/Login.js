import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    var {txtName, txtPassword} = this.state;
    if(txtName === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user',JSON.stringify({
        userName: txtName,
        passWord: txtPassword    
      }))
    }
  }
  render() {
    var {txtName, txtPassword} = this.state;
    var loginuser = localStorage.getItem('user');
    if(loginuser) {
      return <Redirect to="/products"></Redirect>
    }
    return (
    <div className="Login">
      <h1>Đây là trang login</h1>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label>Pass Word</label>
          <input type="text" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
    );
  }
}
export default Login;
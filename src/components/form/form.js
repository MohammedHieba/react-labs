import React from "react";

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  setPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = async () => {
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    let response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let resJson = await response.json();
    if (resJson.token) {
      alert("login successfully");
    } else {
      alert("user not found");
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <label>Username : </label>
        <input
          type="text"
          onChange={this.setUsername}
          value={this.state.username}
        />
        <br />
        <label>email : </label>
        <input type="email" onChange={this.setEmail} value={this.state.email} />
        <br />
        <label>password : </label>
        <input
          type="password"
          onChange={this.setPassword}
          value={this.state.password}
        />
        <br />
        <button className="btn btn-success" onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}
export default Form;

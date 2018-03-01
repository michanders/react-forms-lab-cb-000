import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  nameChange = event => {
    this.setState({
      event.target.username: event.target.value
    })
  }

  passChange = event => {
    this.setState({
      event.targe.password: event.target.value
    })
  }

  render() {
    return (
      <form >
        <div>
          <label>
            Username
            <input name = "username" id="test-username" type="text" value={this.state.username} onChange={this.nameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input name = "password" id="test-password" type="password" value={this.state.password} onChange={this.passChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

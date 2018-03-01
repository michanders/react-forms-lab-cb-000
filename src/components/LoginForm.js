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

  render() {
    return (
      <form >
        <div>
          <label>
            Username
            <input name = "username" id="test-username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" />
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

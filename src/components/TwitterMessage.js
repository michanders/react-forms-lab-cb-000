import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: "",
    };
  }

  handleChange = event => {
    this.setState({
      maxChars: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        maxChars = {this.state.maxChars}
        onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;

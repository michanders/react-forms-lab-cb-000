import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  poemChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  checkPoem = () => {
    var valid = false;
    var poem = this.state.value
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.poemChange}/>
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;

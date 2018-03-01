import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  poemChange = event => {
    this.setState({
      value: event.target.value
    }, this.poemValid)
  };

  poemValid = () => {
    var poem = this.state.value.split('\n');
    var line = poem.map(line => line.split(' ').filter(n => n));
    if (poem.length === 3 && line[0].length === 5 && line[1].length === 3 && line[2].length === 5){
      this.setState({
        valid: true
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.poemChange}/>
        {this.state.valid ? null : <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;

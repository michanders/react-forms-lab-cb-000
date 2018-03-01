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
    var poem = this.state.value.split(". ");
    var line = peom.map(line => line.split(" "));

    if (poem.length === 3 && line[0].length === 5 && line[1].length === 3 && line[2].length === 5){
      let valid = true;
    }
    return valid;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.poemChange}/>
        {!checkPoem ? <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;

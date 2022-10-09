import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props);
  }

  handleIncrement = (step) => {
    this.setState({
      count: this.state.count + step,
    });
  };

  handleDecrement = (step) => {
    this.setState({
      count: this.state.count - step,
    });
  };

  handleReset = () => {
    console.log(this);
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>
          class count - {this.state.count}
        </h1>
        <button onClick={() => this.handleIncrement(1)}>class increment</button>
        <button onClick={() => this.handleDecrement(1)}>class decrement</button>
        <button onClick={this.handleReset}>class Reset</button>
        {this.props.isPresent && <h1>vasanth</h1>}
      </div>
    );
  }
}

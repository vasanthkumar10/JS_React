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
        <button onClick={() => this.handleIncrement(this.props.step)}>
          class increment
        </button>
        <button onClick={() => this.handleDecrement(this.props.step)}>
          class decrement
        </button>
        <button onClick={this.handleReset}>class Reset</button>
        {this.props.isPresent && <h1>vasanth</h1>}
      </div>
    );
  }
}

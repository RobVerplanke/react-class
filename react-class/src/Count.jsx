/* eslint-disable react/prop-types */
import { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter,
    };
  }

  render() {
    return (
      <>
        <p>Amount: {this.state.counter}</p>
      </>
    );
  }
}

export default Count;

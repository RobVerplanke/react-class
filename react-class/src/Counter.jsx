/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter,
    };
  }

  render() {
    return (
      <>
        <p>Amount: {this.props.counter}</p>
      </>
    );
  }
}

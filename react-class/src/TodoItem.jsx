/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo,
      index: props.index,
    };
  }

  render() {
    return (
      <li key={this.props.index}>
        {this.props.todo}
        <button
          type="button"
          id={this.props.index}
          onClick={this.props.handleDelete}
        >
          Delete
        </button>
        <button
          type="button"
          id={this.props.index}
          onClick={this.props.handleEdit}
        >
          Edit
        </button>
      </li>
    );
  }
}

/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: props.inputVal,
      index: props.index,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleResubmit(e) {
    e.preventDefault();
    const id = e.target.id;

    this.props.editTodo(this.state.inputVal, id);
  }

  render() {
    return (
      <li>
        <label htmlFor="task-edit">Edit task: </label>
        <input
          type="text"
          name="task-edit"
          value={this.state.inputVal}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          id={this.props.index}
          onClick={this.handleResubmit}
        >
          Resubmit
        </button>
      </li>
    );
  }
}

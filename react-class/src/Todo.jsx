/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));

    this.props.callbackIncrement();
  }

  handleDelete(e) {
    e.preventDefault();
    const list = [...this.state.todos];
    const index = e.target.id;

    list.splice(index, 1);
    if (!index !== -1) this.setState({ todos: list });

    this.props.callbackDecrement();
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <>
              <li key={index}>{todo}</li>
              <button type="button" id={index} onClick={this.handleDelete}>
                Delete
              </button>
            </>
          ))}
        </ul>
      </section>
    );
  }
}

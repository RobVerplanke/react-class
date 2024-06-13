/* eslint-disable react/prop-types */
import { Component } from 'react';
import TodoItem from './TodoItem.jsx';
import EditForm from './EditForm.jsx';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: '',
      editIndex: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
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

  handleEdit(e) {
    e.preventDefault();
    const index = parseInt(e.target.id, 10);

    this.setState({
      editIndex: index,
    });
  }

  editTodo(newVal, id) {
    const updatedTotos = [...this.state.todos];
    updatedTotos[id] = newVal;

    this.setState((state) => ({
      ...state,
      todos: updatedTotos,
      editIndex: null,
    }));
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
              {this.state.editIndex !== index && (
                <TodoItem
                  key={index}
                  todo={todo}
                  index={index}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              )}
              {this.state.editIndex === index && (
                <EditForm
                  key={index}
                  index={index}
                  inputVal={todo}
                  handleResubmit={this.editTodo}
                  editTodo={this.editTodo}
                />
              )}
            </>
          ))}
        </ul>
      </section>
    );
  }
}

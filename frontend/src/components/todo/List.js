import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos, deleteTodo, toggleTodo } from '../../actions/todos';

class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.array.isRequired,
    toggleTodo: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;

    return (
      <Fragment>
        <h2>Todo List</h2>
        <table className='table tablr-striped'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Done</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos ? (
              todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <input type='checkbox' onChange={this.props.toggleTodo.bind(this,todo)} defaultChecked={todo.done} />
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={this.props.deleteTodo.bind(this, todo.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No todos available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { getTodos, deleteTodo, toggleTodo })(List);

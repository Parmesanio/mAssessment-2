import React, { Component } from 'react';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import { connect } from 'react-redux';
import { setTodo, setTodoList, deleteTodo, completeTodo } from './redux/reducer';
import './App.css';

class App extends Component {
  render() {
    let { setTodo, setTodoList, deleteTodo, completeTodo, todoList, todo } = this.props
    return (
      <div className="App">
        <TodoSearch 
          title={todo.title} 
          setTodo={setTodo} 
          setTodoList={setTodoList}
          />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          />
      </div>
    );
  }
}
const mapStateToProps = state => {
  let { todoList, todo } = state
   return {
     todo,
     todoList
   }
}
const mapDispatchToProps = {
    setTodo,
    setTodoList,
    deleteTodo,
    completeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

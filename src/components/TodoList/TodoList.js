import React from 'react';
import './todolist.css';

const TodoList = (props) => {
    let { todoList, deleteTodo, completeTodo } = props;

    let mappedTodos = todoList.map((todo, i) => {
        let { id, title, completed } = todo;
        return <div key={id} className="todo-item">
                <h5 className={todo.completed ? 'complete' : '' }>{title}</h5>
                <button onClick={() => completeTodo(id)} disabled={todo.completed}>Complete</button>
                <button onClick={() => deleteTodo(id)}>X</button>
            </div>
    })
    return ( 
        <div>
            {mappedTodos}
        </div>
     );
}
 
export default TodoList;
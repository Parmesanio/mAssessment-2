import React from 'react';

const TodoSearch = (props) => {
    let { title, setTodo, setTodoList } = props;
    
    return ( 
        <div className="todoSearch">
            <input name="title" type="text" value={title} onChange={(event) => setTodo(event.target.value)} />
            <button onClick={() => setTodoList()}>Add new to-do</button>
        </div>
     );
}
 
export default TodoSearch;
const initialState = {
    todo: {
            id: 0,
            title: '',
            completed: false
        },
    todoList: []
}

const SET_TODO_LIST = "SET_TODO_LIST",
      CREATE_TODO      = "SET_TODO",
      DELETE_TODO   = "DELETE_TODO",
      COMPLETE_TODO = "COMPLETE_TODO";


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_TODO:
            return {...state, todo: {...state.todo, title: action.payload}}
        case SET_TODO_LIST:
            return {...state, todoList: [...state.todoList, state.todo], todo: {...state.todo, title: '', id: state.todo.id + 1}}
        case DELETE_TODO:
        let index = state.todoList.findIndex(todo => todo.id == action.payload);
        let todoListCopy = [...state.todoList]
        todoListCopy.splice(index, 1)
            return {...state, todoList: todoListCopy}
        case COMPLETE_TODO:
        let todo = state.todoList.findIndex(todo => todo.id == action.payload);
        let todoList = [...state.todoList];
        todoList[todo].completed = true
            return {...state, todoList }
        default:
            return {...state}
    }
}

export function setTodo(val) {
    return {
        type: CREATE_TODO,
        payload: val
    }
}
export function setTodoList() {
    return {
        type: SET_TODO_LIST
    }
}
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}
export function completeTodo(id) {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}
import { createStore } from 'redux';

const initialState = {
    todos: [
        {id: 1, text: "Wake up", isDeleted: false, completed: false, editIndex:null},
        {id: 2, text: "Take a shower", isDeleted: false, completed: false, editIndex:null},
    ],
};

const reducer = (state=initialState, action) => {
    if (action.type === "addTodo") {
        // const newState = {...state}
        // newState.todos.push({id: 3, text: action.payload})
        return {
            todos: [
                ...state.todos,
                {
                    id: state.todos.length + 1,
                    text: action.payload,
                    isDeleted: false,
                    completed: false,
                }
            ]
        }
    }
    if (action.type === "delete") {
        // const newArr = state.todos.filter(todo => todo.id !== action.payload);
        const newArr = state.todos.map(todo => {
            if (todo.id === action.payload) {
                todo.isDeleted = true;
                todo.completed = true;
                return todo;
            }
            return todo;
        })
        return {
            todos: newArr,
        }
    }
    if (action.type === "complete") {
        const newArr = state.todos.map(todo => {
            if (todo.id === action.payload) {
                todo.completed = !todo.completed;
                return todo;
            }
            return todo;
        })
        return {
            todos: newArr,
        }
    }
    if (action.type === "colorSelect") {
        const { color, todoId} = action.payload;
        const newArr = state.todos.map(todo =>  {
            if (todo.id === todoId) {
                todo.color = color;
                return todo;
            }
            return todo;
        })
        return {
            todos: newArr,
        }
    }
    if(action.type === 'edit'){
        const newArray = state.todos.map(todo =>todo.id === action.payload ? {...todo, text: action.text} : todo)
        return {todos: newArray}
    }
    return state
}

const store = createStore(reducer)

export default store;
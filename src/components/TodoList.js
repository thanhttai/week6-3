import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    console.log(todos);

    return (
        <div>
            {todos.map((todo, index) => todo.isDeleted ? null : (
            <TodoListItem key={todo.id} {...todo} index={index}/>
            ))}
        </div>
    )
}

export default TodoList
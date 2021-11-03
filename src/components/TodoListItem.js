import React from 'react'
import { useDispatch } from 'react-redux';
import { availableColors, capitalize } from './Color';
import {useState} from 'react'

const TodoListItem = ({id , text, completed, color}) => {
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(text);
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch({type: 'delete', payload: id});
    }

    const handleComplete = () => {
        dispatch({type: 'complete', payload: id})
    }

    const handleColorChanged = (e) => {
        const color = e.target.value
        dispatch({type: 'colorSelect', payload: {todoId: id, color },})
    }

    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))
    const handleEdit = () => {
        setEdit(true)
    }
    const handleKeyDown = (e) => {
        const trimText = text.trim();
        if (e.which === 13 && trimText) {
            dispatch ({type: 'edit', payload: id, text:editText});
            setEdit(false)
        }
    }
    return (
        <div style={{display: "flex", flexDirection:"row", justifyContent:"space-evenly", alignItems:"baseline"}}>
            <input type='checkbox' checked={completed} onChange={handleComplete} style={{marginRight:"50px"}}></input>
            
            {
                edit ?   <input
                className="new-todo"
                value={editText}
                onChange={e => setEditText(e.target.value)}
                onKeyDown={handleKeyDown}
            /> : <p style={{marginRight:"200px"}}>{text}</p>
            }
            <select className="colorPicker" value={color} onChange={handleColorChanged} style={{color, width:"100px"}}>
                <option value=""></option>
                {colorOptions}
            </select>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default TodoListItem;
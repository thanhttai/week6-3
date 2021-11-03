import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

const Header = () => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    // console.log("text", text);

    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        const trimText = text.trim();
        if (e.which === 13 && trimText) {
            dispatch ({type: 'addTodo', payload: trimText});
            setText("");
        }
    }
    // console.log(e); 
    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </header>
    )
}

export default Header

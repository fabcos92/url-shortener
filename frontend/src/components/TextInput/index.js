import React from 'react'
import './styles.css';

const TextInput = (props) => (
    <div className="TextInput">
        <input
            onChange={props.onChange}
            className="TextInput__input"
            placeholder={props.placeholder}
        />
    </div>
)

export default TextInput
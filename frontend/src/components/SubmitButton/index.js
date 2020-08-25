import React from 'react'
import './styles.css'

const SubmitButton = (props) => (
    <button
        className={`SubmitButton ${props.className ?? ''}`}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.text}
    </button>
)

export default SubmitButton
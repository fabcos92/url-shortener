import React from 'react'
import './styles.css';

const Feedback = (props) => {
    if (!props.message) {
        return null;
    }
    return (
        <div className={`
                Feedback ${props.className ?? ''} 
                ${!props.success ? 'Feedback--success' : 'Feedback--fail'}
            `}>
            <span className="Feedback__message">
                { props.message }
            </span>
        </div>
    );
}

export default Feedback
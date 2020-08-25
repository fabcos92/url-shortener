import React from 'react'
import './styles.css';

const PageTitle = (props) => (
    <div className={`PageTitle ${props.className ?? ''}`}>
        <span className="PageTitle__text">
            { props.title }
        </span>
    </div>
)

export default PageTitle
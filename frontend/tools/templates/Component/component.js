import React from 'react'
import styles from './styles.css'

const Component = (props) => (
    <div className={`${styles.Component} ${props.className}`}>

    </div>
)

export default Component
import React from 'react';
import styles from './button-styles.module.scss'


const Button = ({type,children}) => {
    return (
        <button type={type} className = {styles.button}>
            {children}
        </button>
    );
}

export default Button;

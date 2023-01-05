import React from 'react';
import styles from './input-styles.module.scss'

import { useState } from 'react';

const FormInput = ({label,type,onChange,value}) => {

    

    return (
        <div className='form-group'>
            <label htmlFor={label}> {label} </label>
            <input name={label}  type={type} value= {value} onChange={onChange}/>
        </div>
    );
}

export default FormInput;

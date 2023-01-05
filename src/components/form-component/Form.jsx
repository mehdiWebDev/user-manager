import React from 'react';
import style from './form-styles.module.scss'
import FormInput from '../input-component/FormInput';
import Button from '../button-component/Button';
import { useEffect } from 'react';


import { useState } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';

const From = ({addUser}) => {
    
    const defaultFormFields ={
        username : "",
        age : ''

    }

    const [fields , setFields] = useState (defaultFormFields)
  
const {username,age}=fields
    
console.log("mahdi")
    const handleChange = (e) =>{
 
        const {name,value} = e.target
   
        setFields ( {...fields , [name]:value} )
  
    }
    const resetFormFields = () => {
        setFields(defaultFormFields)
    }

   

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(fields.age < 0){
        
            return 
        }
        addUser(fields)
       
        resetFormFields()
        console.log(fields)

    }



    return (
        <form className='form-container' onSubmit={handleSubmit}>
            
            <FormInput label={"username"} type="text" onChange ={handleChange} value={username} />
            <FormInput   label={"age"} type="number" onChange ={handleChange}  value={age}/>
            <Button handleSubmit = {handleSubmit}> Add User  </Button>

        </form>
    );
}

export default From;

import React from 'react';
import './button.css';

const Button =(props)=>{

    return(
        <div>
 <h4>You can re-use this button anywhare in tha application</h4>
        <button className='my-btn ' onClick={props.clickabel} >click me</button>
        </div>
       
    )
}
export default Button;
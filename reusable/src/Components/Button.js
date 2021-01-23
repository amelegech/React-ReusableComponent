import React from 'react';
import './button.css';

const Button =(props)=>{
    const [color]= React.useState(props.color)
    const [size]= React.useState(props.size)
    return(
        <div>
 <h4>You can re-use this button anywhare in tha application</h4>
        <button className='my-btn '  style={{backgroundColor: color, fontSize:size}} onClick={props.clickabel}  >{props.btnName} {props.nameB}</button>
        
        </div>
       
    )
}
export default Button;
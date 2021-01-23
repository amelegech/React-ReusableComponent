import React from 'react';
;

const Counter =(props)=>{
   const [count, setCount] = React.useState(0)

 const addCounter  =()=>{
   setCount(count + 1)
 }

 const countDown=()=>{
 setCount(count - 1)
 }
    return(
        <div>
            <h4>Counter value is change when the button will clicked</h4>
            <button style={{backgroundColor: "pink", padding:'10px', margin: '5px'}} onClick={addCounter} >Click Counter</button>
            <button style={{backgroundColor: "purple", padding:'10px',margin: '5px'}} onClick={countDown} >Click Counter</button>
             count Value :{count} 
                 
                  
           
        </div>
    )
}
export default Counter;
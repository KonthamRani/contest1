import React, { useState } from 'react';
import styles from '../components/Form.css'
const Form=()=>{
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState(0);
    const handleButton=(action)=>{
        if(action==="+") setResult(parseInt(num1)+parseInt(num2))
    }
    const handleChange=(event)=>{
        const {name,value}=event.target;
        name==="num2"?setNum2(value):setNum1(value);
    }
    return(

        <div className="main">
            <div className='sub'>
                <h1>React Calculator</h1>
                <input type="text" name='num1' placeholder='num1' onClick="handleChange"/>
                <input type="text" name='num2' placeholder='num2' onClick="handleChange"/>
                <h1>result:{result}</h1>
            </div>
            <div className='Buttons'>
                <button onClick={()=>{handleButton("+")}}>+</button>
                <button onClick={()=>{handleButton("-")}}>-</button>
                <button onClick={()=>{handleButton("*")}}>*</button>
                <button onClick={()=>{handleButton("/")}}>/</button>
            </div>
        </div>
    )
}
export default Form;
import React, { useState } from 'react';
import '../components/Form.css'
const Form = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [failureMessage, setFailureMessage] = useState("");
    const handleButton = (action) => {
        console.log(typeof (parseInt(num1)), typeof (num2))
        if (num1 === "" || num2 === "") {
            document.getElementById("result").style.display="hidden";
            document.getElementsByClassName("success").style.display="hidden";
            document.getElementsByClassName("failure").style.display="block";
            num1 === "" ? setFailureMessage("Error: Num1 cannot be empty") : setFailureMessage("Error: Num2 cannot be empty");
        }
        else if (!isNaN(num1) && !isNaN(num2)) {
            if (action === "+") setResult(parseInt(num1) + parseInt(num2))
            else if (action === "-") setResult(num1 - num2)
            else if (action === "*") setResult(num1 * num2)
            else if (action === "/") setResult(num1 / num2)
            document.getElementById("result").style.display="block";
            document.getElementById("result").innerText="Result"
            document.getElementsByClassName("success").style.display="block";
            document.getElementsByClassName("failure").style.display="hidden";
            setSuccessMessage("Success: Your result is shown above!")
        }

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        name === "num2" ? setNum2(value) : setNum1(value);
    }
    return (

        <div className="main">
            <div className='sub'>
                <h1>React Calculator</h1>
                <input type="text" name='num1' placeholder='num1' onChange={handleChange} />
                <input type="text" name='num2' placeholder='num2' onChange={handleChange} />
                <h2 className='success'>{successMessage}</h2>
                <h2 className='failure'>{failureMessage}</h2>
                <h1 id="result">{result}</h1>
            </div>
            <div className='Buttons'>
                <button onClick={() => { handleButton("+") }}>+</button>
                <button onClick={() => { handleButton("-") }}>-</button>
                <button onClick={() => { handleButton("*") }}>*</button>
                <button onClick={() => { handleButton("/") }}>/</button>
            </div>
        </div>
    )
}
export default Form;
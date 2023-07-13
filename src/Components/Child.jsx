import React from "react";
import Child1  from "./Child1";
import { useState } from "react";

const Child = (props) => {
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const handleInput=(event)=>{
        console.log("input",event.target?.value);
        // ?: indicates if value is undefined then doesnot throw error it will handle it
        setValue(event.target.value);
    };
    const handleButton=(event)=>{
        setInputValue (value)
       
    };
    return (
        <div>
            <h1>From {props?.company}</h1>
          <input onChange={handleInput} value={value}></input>
          <button onClick={handleButton}>submit</button>

         {
         // Return functioning instead of writing function
         }

          {/* onChange={(event) => {console.log("entered input is", event.target.value); setValue(event.target?.value)}}></input> */}
            <Child1 domain={inputValue}></Child1>
        </div>
    )
}

export default Child;

  

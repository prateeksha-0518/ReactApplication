import React, { useState } from 'react';

function Exercise() {
  const [Value, setValue] = useState('');
  const [array, setArray] = useState([]);

  const handleInput=(event)=>{
    console.log("input",event.target?.value);
   setValue(event.target?.value);
  };
  const handleButton=(event)=>{
    const newArray=[...array];
    newArray.push(Value);
    console.log("sss","ss",newArray);
    setArray (newArray);
    setValue("")
};

  return (
    <div>
     
      <h2>Pushing input to array</h2>
      <input  value={Value} onChange={handleInput}/>
      <button onClick={handleButton}>submit</button>
        {array.map((ele, index) => (
<li key={index}>{ele}</li>
        ))}

      </div>
  );
}
export default Exercise;

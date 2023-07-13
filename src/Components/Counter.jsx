import React from "react";
import { useState } from "react";
const Counter=()=>
{
    const[value,setValue]=useState(0)
    
   
    return(
        <div>
            <button style={{marginLeft:"24px"}} onClick={()=>setValue(value+1)}>Incremnet</button>
<div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>{value}</div>
<button style={{marginRight:"24px"}} onClick={()=>setValue(value-1)}>Decrement</button>
        </div>
    )
}
export default Counter;
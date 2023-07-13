import React from "react";
import Child from "./Child";
import { useState } from "react";

const Parent=(props)=>
{
  const[First,useFirst]=useState("Sasken Techonology");
   
 

    return(
        <div>
            <h1>{props.name}</h1>
           
            <Child company={First}/>
         

        </div>
    );
    }
  export default Parent;
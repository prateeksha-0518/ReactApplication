import React, { useState } from "react";
const Maps=()=>
{
    const array=[1,2,3,4,5]
    const array1=["cat","dog","cow"]
    const array2=[1,"aisha",2,"santosh"]

    const newArray=array.map((ele)=>{
        return ele*2;
    })
    let newArray1=array1.map((ele)=>{
        return ele;
    }) 
    console.log(newArray);
    console.log(newArray1);
    console.log(array2);

    const[value,setValue]=useState(newArray)
    return(
       <div>
        <h1>Using Map Functions</h1>

        {/* storing in hook */}
        <h2>By storing in hook</h2>
       <div> {value+''}</div>
       
 {/*     Assing value directly */}
        <h2>By Assing values directly</h2>
        <div>{newArray1+''}</div>

        {/* writting function */}
        <h2> By Writting function directly in htm</h2>
        <div>
  {array2.map((ele) => {
    return ele;
  })}
</div>

        

      
       </div>
    )

}
export default Maps;


import React, { useState } from "react";
let Filters=()=>
{
  let array=["jan","shama","bamma"]
 
 let array1=[1,2,3,4,5]
 
  console.log(array);
    return( 
          <div>
           
           <h1>Filtering</h1>
           <div>{array.filter((ele)=>{return ele.endsWith('a')})}</div>
           <div>

{array.filter((ele) => ele.endsWith('a')).map((filteredEle) => { return <div>{filteredEle}</div>;

})}

</div>
        </div>
    )
}
export default Filters;
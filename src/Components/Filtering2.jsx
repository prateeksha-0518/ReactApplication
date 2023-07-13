import React from "react";
const Filter2=()=>
{
  
        const people = [
            {
              name: 'James',
              hobby:'cricket',
              age: 31,
            },
            {
              name: 'John',
              hobby:'football',
              age: 45,
            },
            {
              name: 'Paul',
              hobby:'cricket',
              age: 65,
            },
            {
              name: 'Ringo',
              hobby:'football',
              age: 49,
            },
            {
              name: 'George',
              hobby:'cricket',
              age: 34,
            }
          ];
   
    return(
       
        <div>
             <h1>example-2 </h1>
         {people.filter(ele=>ele.age<60&& ele.hobby=='cricket').map((filteredEle)=>(<li>{filteredEle.name}</li>))}
        </div>
    )
}
export default Filter2;
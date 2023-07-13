import React from "react";
const Map2=()=>
{
    const Data = [

        {
    
          id: 1,
    
          name: "abcd"
    
        },
    
        {
    
          id: 2,
    
          name :"dscs"
    
        },
    
        {
    
          id: 3,
    
          name :"tfddd"
    
        },
    
        {
    
          id: 4,
    
          name :"tsfts"
    
        }
    
      ];
      <div>
        
      </div>
    return(
        <div>
            <h1>Mapping objects</h1>
            {Data.map((e)=>{return(<div>{e.name}</div>);})}
            </div>
       
    )
}
export default Map2;
import React from "react";
const Filteringobjects =()=>
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
    
        },];
    return(
        <div>
            <h1>Filtering objects</h1>
            <div>
            {Data.filter(ele=> ele.name.endsWith('d')).map((filteredEle) => (<li>{filteredEle.name}</li>
  ))}
  </div>
 
        </div>
    )
} 
export default Filteringobjects;

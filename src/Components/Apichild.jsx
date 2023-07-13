import React from "react";
const Apichild=(props)=>
{
    return(
<div>
<div>{props?.data.map((ele)=>{
                return <div>
                   {props?.showName &&<li>Name:{ele.name}</li>} 
               <li> Email:{ele.email}</li><hr/> </div>})} 
                 
            </div>  

</div>
) 
}

export default Apichild;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Apichild from "./Apichild";


const Api=()=>
{
    const[value,setValue]=useState([])

    const[inputvalue,setInputValue]=useState(value)
    const[inn,setInn]=useState({})
    const[input,setInput]=useState({})
    useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
    console.log("api calls",response);
    if(response?.status === 200){
        setValue(response?.data);
    }

});
const sample={
    name:"ashika",
    id:101
};
axios.post("https://jsonplaceholder.typicode.com/posts",sample).then((data)=>{
       console.log("api posts",data?.data);
     setInputValue(data?.data)
     });
     const sample1={
        name:"ram",
        
    };
     axios.put("https://jsonplaceholder.typicode.com/posts/1",sample1).then((data)=>{
       console.log("api update",data?.data);
     setInn(data?.data)
     });
     axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((data)=>{
        console.log("api delete",data?.data);
      setInput(data?.data)
      });    
    },[])
    return( 
        
        <div>
            <h1>Api calls</h1>
            
              {/* <div>{value.map((ele)=>{
                return <div> <li>Name:{ele.name}</li>
               <li> Email:{ele.email}</li><hr/></div>})} 
                
            </div>    */}
         <div>
            <Apichild data={value} showName={false}/>
            </div>
          
            {/* <div>{inputvalue.name}</div>
            <div>{inn.name}</div>
            <div>{input.id}</div> */}
     </div>
    )
}
export default Api;

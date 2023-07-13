import React from "react";
import Child from "./Child";

class Parent2 extends React.Component{
    constructor() {
        super();
        this.state = {
            value: "",
            inputvalue: ""   
        }
    }
    handleInput=(event)=>{
        console.log("entered input is in the", event.target?.value); 
        this.setState({value:event.target?.value});
    }
    handleButton=(event)=>{
        this.setState({inputvalue:this.state.value})   
    };
    render(){     
        return (
            <div>
           <h1>{this.props.name}</h1>
           <input value={this.state.value} onChange={this.handleInput}></input>
           <button onClick={this.handleButton}>submit</button>
           <Child company={this.state.inputvalue}/>      
        </div>
        );
    }
}
export default Parent2;

 

   
 
    
    
    //        <input value={this.state.value} onChange={this.handleInput}></input>
          
    //        <button onClick={this.handleButton}>submit</button>
    //        <Child company={this.state.inputvalue}/>
    //     </div>
    //     );
    // }


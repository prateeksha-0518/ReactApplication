import React from "react";
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
const Routing=()=>
{
    const Home=()=>
    {
        return(
            <div>
                <h1>this is home page</h1>
            </div>
        )
    }
    const Aboutus=()=>
    {
        return(
            <div>
                <h1>this is About page</h1>
            </div>
        )
    }
    const Contact=()=>
    {
        return(
            <div>
                <h1>this is contact page</h1>
            </div>
        )
    }
    return(
        <Router>
        <div>
            <ul>
                <li>
                       <Link to="/">Home</Link>
                </li>
                <li>
                       <Link to="/about">Aboutus</Link>
                </li>
                <li>
                       <Link to="/contact">Contact</Link>
                </li>
            </ul>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<Aboutus/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
        </Router>
    )
};
export default Routing;

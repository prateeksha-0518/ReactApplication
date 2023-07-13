import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";



const Routing1=()=>
{
  
//  const navigate=useNavigate()
    const Home=()=>
    {   
            return <h1>Home</h1>      
    }
    const Aboutus=()=>
    {
        return      <h1>this is About page</h1>     
    }
    const Contact=()=>
    {
        return <h1>this is contact page</h1>
          
    }
    const NotFound = () => {
        return <h1>404 Not Found</h1>;
      }
      const Name = () => {
        return <h1>this is name page</h1>;
      }
      const Content = () => {
        return <h1>this is cotent page</h1>;
        
      }
      // const goToAbout = () => {

      //  navigate("/about")
      // }
     
    return(
        <Router>
        <div>
            <ul>
                <li>
                <Link  to="/">Home</Link>  
                </li>
                <li>
                <Link  to="/about">Aboutus</Link>  
                </li>
                <li>
                <Link  to="/contact">Contact</Link>  
                </li>
                <li>
                  {/* <button onClick={goToAbout}>About</button> */}
                </li>
            </ul>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/name" element={<Name />} />
            <Route path="/content" element={<Content/>} />
          {/* *-is used to match url that is not matching any route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        </Router>
    )
}
export default Routing1;

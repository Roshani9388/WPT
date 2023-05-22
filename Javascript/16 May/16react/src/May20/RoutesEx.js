
import {Outlet,Link} from "react-router-dom"
export default function RoutesEx()
{

    return <center><div>******** Greeting from Function Component **********
        <br></br>
        <br></br>
        <div style={{border:"3px dotted violet"}}></div>
    <p><Link to="/shopping">Shop Here</Link></p>
    <div style={{border:"2px solid yellow"}}> 
    </div> 
    <p><Link to="/user">User Details</Link></p>
    <div style={{border:"2px solid green"}}> 
    </div> 
    <p><Link to="/convertor">convertor</Link></p>
    <div style={{border:"2px solid blue"}}> 
    </div> 
    <p><Link to="/fruits">Fruits</Link></p>
    <div style={{border:"2px solid red"}}> 
    </div> 
   <Outlet></Outlet>
  
        </div>
        </center>
 


}
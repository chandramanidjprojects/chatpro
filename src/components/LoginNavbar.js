import { NavLink } from "react-router-dom";


function Navbar(){
  return <div className="container bg-secondary">
         <div className="row">
         <div className="col" >
           <h4><NavLink exact='true' to='/' style={({isActive})=>isActive ? ({color:'white',textDecoration:'none'}) :({color:'black',textDecoration:'none'})}                  
           > login</NavLink></h4>
         </div>
         <div className="col">
            <h4><NavLink exact='true' to='/register'  style={({isActive})=>isActive ? ({color:'white',textDecoration:'none'}) :({color:'black',textDecoration:'none'})}
            
            > register</NavLink></h4>                  
         </div>
    </div> 

  </div>
}

export default Navbar

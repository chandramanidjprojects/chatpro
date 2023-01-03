import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import ai from './Axios';
import { useEffect, useState } from "react";
function Navbar(){
  const [profile,setProfile]=useState([])
  useEffect(()=>{
    const source=axios.CancelToken.source()
    const loadComments=async()=>{
      try{
        const res=await ai.get('/users/'+1+'/',{cancelToken:source.token})


      }
      catch(error){
        console.log('request got rejected from profile comments')
      }
    }
    loadComments()
    
    return ()=>{
      console.log('component un mounted from profile comments')
      source.cancel()
    }    
  },[])

  return <>
    <div className="container bg-secondary fixed-top">
         <div className="row">
         <div className="col" >
           <h4><NavLink exact='true' to='/post' style={({isActive})=>isActive ? ({color:'white',textDecoration:'none'}) :({color:'black',textDecoration:'none'})}                  
           > posts</NavLink></h4>
         </div>
         <div className="col">
            <h4><NavLink exact='true' to='/status'  style={({isActive})=>isActive ? ({color:'white',textDecoration:'none'}) :({color:'black',textDecoration:'none'})}
            
            > status</NavLink></h4>                  
         </div>
         <div className="col">
         <h4><NavLink exact='true' to='/chat'  style={({isActive})=>isActive ? ({color:'white',textDecoration:'none'}) :({color:'black',textDecoration:'none'})}
         
         >chat</NavLink> </h4>                
         </div>
         
         <div className="col">
         <h4><NavLink exact='true' to='/menu'  style={({isActive})=>isActive ? ({color:'white',textDecoration:'none'}) :({color:'black',textDecoration:'none'})}
         
         >menu</NavLink> </h4>                
         </div>
      </div> 
    
    </div>
<div style={{width:100,height:100}}>
  {/* {
    profile.profile ?   <img src={profile.profile} alt='image not found'/> : null
  } */}

</div>
    <Outlet />
  </>
}

export default Navbar





import React,{useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ai from '../pages/Axios';
import axios from 'axios';
function ProfileComments(props){
  let location=useLocation()
  const navigate=useNavigate()
  const [data,setData]=useState({loading:true,data:[]})
  useEffect(()=>{
    const source=axios.CancelToken.source()
    const loadComments=async()=>{
      try{
        const res=await ai.get('/users/'+location.state+'/',{cancelToken:source.token})
        setData({loading:false,data:res.data})

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
  },[location.state])
  return <div>
         <p onClick={()=>navigate('/status')}> go back</p>
           {
            !data.loading ?  
              data.data.profile_comments.map(item=><h6 key={item.id}>{item.comment_text}</h6>)
            : null
           }

  </div>
  

}
export default ProfileComments

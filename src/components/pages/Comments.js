import React,{useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ai from './Axios';
import axios from 'axios';
function Comments(props){
  let location=useLocation()
  const navigate=useNavigate()
  const [data,setData]=useState({loading:true,data:[]})
  useEffect(()=>{
    const source=axios.CancelToken.source()
    const loadComments=async()=>{
      try{
        const res=await ai.get('/posts/'+location.state+'/',{cancelToken:source.token})
        setData({loading:false,data:res.data})

      }
      catch(error){
        console.log('request got rejected from post comments')
      }
    }
    loadComments()
    
    return ()=>{
      console.log('component un mounted from post comments')
      source.cancel()
    }    
  },[location.state])
  return <div>
         <p onClick={()=>navigate('/post')}> go back</p>
           {
            !data.loading ?  
              data.data.comments.map(item=><h6 key={item.id}>{item.comment_text}</h6>)
            : null
           }

  </div>
  

}
export default Comments































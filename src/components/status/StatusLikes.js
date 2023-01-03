import { useState } from "react";
import ai from "../pages/Axios";


function StatusLike(props){
    const user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id
    const [like,setLike]=useState({like:false,count:0})
    const HandleLike=async(status)=>{
      if(status){
        await ai.delete('/status_likes/'+props.item_id+'/')
        setLike({like:!like.like,count:like.count-1})
      }
      else{
  
       await ai.post('/status_likes/',{
        like_by:user_id,like_to:props.item_id
      })
       setLike({like:!like.like,count:like.count+1})
      }
  
    }
    return <div  className='col fs-6 fst-italic'>
      {
          props.like_ids.includes(user_id) ? 
            <p onClick={()=>HandleLike(!like.like)} style={{color:!like.like ? 'red':'black'}}>like {props.like_ids.length+like.count}</p> 
            
            : 
            
            <p onClick={()=>HandleLike(like.like)} style={{color:like.like ? 'red':'black'}}>like {props.like_ids.length+like.count}</p>
      }
    </div>
  }
  export default StatusLike
  
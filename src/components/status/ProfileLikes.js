import { useState } from "react"
import ai from "../pages/Axios"
function ProfileLikes(props){
    const user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id
    const [like,setLike]=useState({like:false,count:0})
    const HandleLike=async(status)=>{
        console.log(props.item_id,user_id)
        if(status){
          const res=await ai.delete('/profile_likes/'+props.item_id+'/')
          setLike({like:!like.like,count:like.count-1})
        }
        else{
    
         const res=await ai.post('/profile_likes/',{
          like_by:user_id,like_to:props.item_id
        })
         setLike({like:!like.like,count:like.count+1})
        }
    
      }
    
    return <div className='col fs-6 fst-italic'>
    {
      props.likes.find(i=>i.like_by===user_id) ?

      <p onClick={()=>HandleLike(!like.like)} style={{color:!like.like ? 'red':'black'}}>like {props.likes.length+like.count}</p> 
      
      :

      <p onClick={()=>HandleLike(like.like)} style={{color:like.like ? 'red':'black'}}>like {props.likes.length+like.count}</p>
      
    }
    </div>
  }
  export default ProfileLikes

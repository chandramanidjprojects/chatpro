import React, { useState } from 'react'
import ai from './Axios';
function Likes(props){
  const user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id 
  const [like,setLike]=useState({clicked:false,count:0})
  const HandleLike=(status)=>{
        if(status){
          setLike({clicked:!like.clicked,count:like.count-1})
          ai.delete('/post_likes/'+props.item_id+'/')
          .then(res=>res)
          .catch(err=>err)
        }
        else{
          setLike({clicked:!like.clicked,count:like.count+1})
          ai.post('/post_likes/',{like_by:user_id,like_to:props.item_id})
          .then(res=>res)
          .catch(err=>err)
        }
  }
  return <div className='col fs-6 fst-italic'>
    {
        props.likes.find(item=>item.like_by===user_id) ?
           <p onClick={()=>HandleLike(!like.clicked)} className={!like.clicked ? 'text-danger' : 'text-dark'}>likes {props.likes.length + like.count}</p> 
           : 
           <p onClick={()=>HandleLike(like.clicked)} className={like.clicked ? 'text-danger' : 'text-dark'}>likes {props.likes.length + like.count}</p>
    }

  </div>
}
export default Likes

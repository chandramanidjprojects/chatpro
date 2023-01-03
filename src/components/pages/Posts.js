import React, { useEffect,useState } from 'react'
import ai from './Axios';
import axios from 'axios';
import Likes from './Likes';
import AddFriend from './AddFriend';
import { useNavigate } from 'react-router-dom';

const ht=window.innerWidth < 576 ? 400 : 200

function Posts(props){
  const [posts,setPosts]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    const source=axios.CancelToken.source()
    const loadposts=async()=>{
       try{
          const res=await ai.get('/posts/',{cancelToken:source.token})
          setPosts(res.data)
       }
       catch(err){
        console.log('error from posts page',err)
       }
    }
    loadposts()
    return ()=>{
        console.log('un mounted')
        source.cancel()
    }
  },[])

  return <div className='container mt-5'>
    <div className='row'>
   {
       posts.map(item=><div className='col-sm-6 col-md-4 col-lg-3 bg-primary ' key={item.id}>
           {
            getformat(item.file) ? 
            <>
            <h6>{item.get_post_by_info.name} {item.id}</h6>
            <video style={{width:'100%',height:ht}} controls className='img-fluid img-thumbnail rounded'>
              <source src={item.file}/>
            </video>
            
            </> 
            : 
            <>
            <h6>{item.get_post_by_info.name}  {item.id}</h6>
            <img src={item.file} style={{width:'100%',height:ht}} className='img-fluid img-thumbnail rounded' alt='post images'/>
            </>
           }
           <div className='row '>
               <AddFriend friends={item.friends} post_by={item.post_by}/>
               <Likes likes={item.postlike_set} item_id={item.id}/>
               <div className='col fs-6 fst-italic' onClick={()=>navigate('/postcomments',{state:item.id})}>comments</div>
               <div className='col fs-6 fst-italic'>share</div>

           </div>
       </div>)
   }
  </div>
  </div>
}
export default React.memo(Posts)






const getformat=(file)=>{
  return  file.indexOf('.mp4') !== -1 || file.indexOf('.3gp') !== -1
}


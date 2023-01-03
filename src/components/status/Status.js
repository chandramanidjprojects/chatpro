import axios from "axios";
import { useEffect,useState } from "react";
import ai from "../pages/Axios";
import StatusLikes from "./StatusLikes";
import ProfileLikes from './ProfileLikes';
import {useNavigate} from 'react-router-dom';
import RemoveFriend from "./RemoveFriend";
const ht=window.innerWidth < 576 ? 400 : 200

function Status(){
  const [status,setStatus]=useState([])
  const user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id
  const navigate=useNavigate()
  useEffect(()=>{
    const source=axios.CancelToken.source()
     const load_data=async()=>{
        try{
          const res=await ai.get('/users/',{cancelToken:source.token})
          console.log(res.data)
          setStatus(res.data)
        }
        catch(err){
          console.log('error from status')
        }
     }
     load_data()
     return ()=>{
      source.cancel()
    }
  },[])
  const GetStatus=()=>{
     let fdata= status.filter(it=>it.follow.includes(user_id))
     let mdata=fdata.map(item=><div className='col-sm-6 col-md-4 col-lg-3 bg-primary ' key={item.id}>         
       {
        item.first_status ? 
            getformat(item.first_status.file) ? 
            <>
            <h6>{item.first_status.name} </h6>
            <video style={{width:'100%',height:ht}} controls className='img-fluid img-thumbnail rounded'>
              <source src={item.first_status.file}/>
            </video>
            <div className='row '>
               <StatusLikes like_ids={item.first_status.like_ids} item_id={item.first_status.id}/>
               <div className='col fs-6 fst-italic' onClick={()=>navigate('/statuscomments',{state:item.first_status.id})}>comment</div>
               <div className='col fs-6 fst-italic'>share</div>
               <RemoveFriend item_id={item.first_status.status_by}/>
               
           </div>
            </> 
            : 
            <>

            <h6>{item.first_status.name} </h6>
            <img src={`http://127.0.0.1:8000${item.first_status.file}/`} style={{width:'100%',height:ht}} className='img-fluid img-thumbnail rounded' alt='status images'/>
            <div className='row '>
               <StatusLikes  like_ids={item.first_status.like_ids} item_id={item.first_status.id}/>
               <div className='col fs-6 fst-italic' onClick={()=>navigate('/statuscomments',{state:item.first_status.id})}>comment</div>
               <div className='col fs-6 fst-italic'>share</div>
               <RemoveFriend item_id={item.first_status.status_by}/>
               
           </div>
            </>
        : 
        
        <div >
            
            
            <h6>{item.username}  {item.id}</h6>
            <img src={item.profile} style={{width:'100%',height:ht}} className='img-fluid img-thumbnail rounded' alt='status images'/>
            <div className='row '>
               <ProfileLikes likes={item.likes} item_id={item.id}/>
               <div className='col fs-6 fst-italic' onClick={()=>navigate('/profilecomments',{state:item.id})}>comment</div>
               <div className='col fs-6 fst-italic'>share</div>
               <RemoveFriend item_id={item.id}/>
           </div>
        </div>
         
       }
     </div>)
     return mdata
  }
  return <div className="mt-5">
    <div className="row">
     {GetStatus()}
    </div>

  </div>
}
export default Status



const getformat=(file)=>{

    return  file.indexOf('.mp4') !== -1 || file.indexOf('.3gp') !== -1
  }
  



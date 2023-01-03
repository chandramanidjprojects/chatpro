import axios from "axios"
import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom"
import ai from "../pages/Axios"


function StatusComments(){
  const location=useLocation()
  const [comments,setComments]=useState([])
  useEffect(()=>{
    const source=axios.CancelToken.source()
    const get_data=async()=>{
        try{
          const res=await ai.get('/status/'+location.state+'/',{cancelToken:source.token})
          
          setComments(res.data.status_comments)
       }
        catch(error){

           console.log('')
        }
     }
     get_data()
    return ()=>{
       source.cancel()
    }  
  },[location.state])
  return <div>
     {
        comments.map(item=><h6 key={item.id}>{item.comment_text}</h6>)
     }
  </div>
}
export default StatusComments



import { useNavigate } from "react-router-dom"
function PostDetail(){
    const navigate=useNavigate()
    return <p onClick={()=>navigate('/')}>PostDetail page</p>
  }
  export default PostDetail
  
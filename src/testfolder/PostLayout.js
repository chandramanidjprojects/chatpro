import { Outlet, useNavigate } from "react-router-dom"

function PostLayout(){
    const navigate=useNavigate()
    return <>
    <p onClick={()=>navigate('/post/xxx')}>PostLayout page</p>
    <Outlet />
    </>
  }
  export default PostLayout
  
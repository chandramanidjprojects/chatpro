import { useState } from "react"

function AddFriend(props){
  const [add,setAdd]=useState(true)
  const user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id
  const Add=(status)=>{
    setAdd(!status)
  }
  return <div className='col-4 fs-6 fst-italic' >
     {
        props.post_by === user_id ? 'views' : props.friends.includes(user_id) ? 
        
        <>
          {
            add ? <p onClick={()=>Add(add)}>remove</p> : <p onClick={()=>Add(add)}>add</p>
          }
        </>
        
        :
        <>
        {
           add ? <p onClick={()=>Add(add)}>add</p> : <p onClick={()=>Add(add)}>remove</p>
        }
        </>
        
     }

  </div>
}
export default AddFriend

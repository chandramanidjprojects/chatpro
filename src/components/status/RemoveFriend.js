import React,{useState} from 'react';
import ai from '../pages/Axios';
function RemoveFriend(props){
  const user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id  
  const [remove,setRemove]=useState(true)
  const HandleRemove=async()=>{
    await ai.post('/friends/',{
      notifier_id:user_id,
      add_user:props.item_id
    })
   setRemove(!remove)
  }
  return <div className='col fs-6 fst-italic'>
    {
    remove ? <p  onClick={HandleRemove}>remove</p> : <p onClick={HandleRemove}>addfriend</p>
    }

  </div>
}
export default RemoveFriend


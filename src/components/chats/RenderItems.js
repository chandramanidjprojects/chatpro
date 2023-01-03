import React, { useState } from "react"
import LiveChat from './LiveChat';

function RenderItems(props){
  const [modal,setModal]=useState({visible:false,item_id:null})
  const  user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id
  const getUsers=()=>{
    let fdata=props.item.current_users.filter(item=>item.id !== user_id)

    let mdata=fdata.map(item=>{
      return <div
          key={item.id} style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}} data-itemid={props.item.id  }>  
         <img src={item.profile} style={{width:100,height:100}} className='img-fluid img-thumbnail rounded-circle' alt='post images'
            data-itemid={props.item.id  }
         />
         <h6 data-itemid={props.item.id  }>{item.id} {item.username} {item.active_state ? '  online' : '  offline'}</h6>
         <h6 data-itemid={props.item.id  }>unread {unRead(props.item.messages,user_id)}</h6>
      </div>
      
    })
    return mdata
  }
  const HandleClose=(e)=>{
   setModal({visible:!modal.visible,item_id:e.target.dataset.itemid})
  }
 return <>
      <div className="mt-5" onClick={HandleClose}>
          {getUsers()}
      </div>
      <div>
            {
             modal.visible ? <LiveChat onClose={HandleClose} item_id={modal.item_id}/> : null
            }
      </div>      
  </>
}
export default RenderItems

function  unRead(messages,user_id){
  let count=0;
  messages.forEach((item,index)=>{
    if(item.unread){
      if(item.message_to===user_id){
        count++
      }
    }
  })
  return count
}


// import React, { useState } from "react"
// import LiveChat from './LiveChat';
// function RenderItems(props){
//   const [visible,setVisible]=useState(false)
//   const  user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id
//   const HandleClose=()=>{
//     setVisible(!visible)

//   }
//   const getUsers=()=>{
//     let fdata=props.item.current_users.filter(item=>item.id !== user_id)

//     let mdata=fdata.map(item=>{
//       return <><div 
//           onClick={HandleClose}
//           key={item.id} style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>  
//          <img src={item.profile} style={{width:100,height:100}} className='img-fluid img-thumbnail rounded-circle' alt='post images'/>
//          <h6>{item.id} {item.username} {item.active_state ? '  online' : '  offline'}</h6>
//          <h6>unread {unRead(props.item.messages,user_id)}</h6>
//       </div>
//       <div>
//             {
//              visible ? <LiveChat onClose={HandleClose}  item_id={item.id} /> : null
//             }
//       </div>
          
//       </>
//     })
//     return mdata
//   }
//   return <div className="mt-5">
//            {getUsers()}
           
//   </div>
// }
// export default React.memo(RenderItems)









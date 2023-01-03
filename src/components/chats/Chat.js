import React, { useEffect,useState } from "react";
import RenderItems from "./RenderItems";
const request_id=new Date().getTime()
function Chat(){

   const socket=React.useRef(null)
   const [rooms,setRooms]=useState([])
   useEffect(()=>{
     const  user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id 
     let unmount=false 
     socket.current=new WebSocket(`ws://127.0.0.1:8000/ws/chats/?token=${localStorage.getItem('access_token')}`)
     socket.current.onopen=()=>{
        
        socket.current.send(JSON.stringify({
            action:'notify',
            request_id:request_id,        
          }))

        socket.current.send(JSON.stringify({
            action:'list',
            request_id:request_id
        }))
     }
     socket.current.onmessage=(e)=>{
        const data=JSON.parse(e.data)
        switch(data.action){
            case 'list':
               if(!unmount){
                data.data.forEach((item,index)=>{
                   Subscribe_to_room(item.id)
                })
                setRooms(data.data)               
               }
               break;
            case 'update':
                const update_data=data.data
                if(update_data.notifier_id !== user_id){
                
                if(!unmount){
                    console.log('updated ......................')
                    setRooms((rooms)=>rooms.map((item,index)=>{
                        if(item.id===update_data.id){
                            return update_data
                        }
                        else{
                           return item
                        }
                    }))
                }
            }
                break;
            default:break;   
        }
     }
     return ()=>{
        unmount=true
        console.log('un mounted from chats')
     }
   },[])
   const Subscribe_to_room=(id)=>{
     socket.current.send(JSON.stringify({
        action:'subscribe_instance',
        pk:id,
        request_id:request_id
     }))
   }
   return <div>
    {
        rooms.map(item=><RenderItems item={item} key={item.id}/>)
    }
    </div>
}
export default React.memo(Chat)
































// import React from 'react';
// import reactDOM from 'react-dom';
// import ai from './Axios';
// class Chat extends React.Component{
//   state={
//     chats:[],
//     users:this.props.users,
//     chat_text:''
//   }
  
//   socket=new WebSocket(`ws://127.0.0.1:8000/ws/rchat/${this.props.id}/?token=${localStorage.getItem('access_token')}`)
  
//   componentDidMount(){
//     ai.get('/chat/'+this.props.id+'/')
//     .then(res=>this.setState({chats:res.data}))
//     let el=document.getElementById('scroll_div')
//     el.scrollBy(0,el.scrollHeight)
    
//     this.socket.onmessage=(e)=>{
//       this.setState({chats:[...this.state.chats,JSON.parse(e.data)]})
//     }
//   }
//   getProfile=(item)=>{
//        let user= this.state.users.find(i=>i.id===item)
//        return user.profilepicture.image
//     }
//   renderChats=()=>{
//     let chat=this.state.chats.map(i=><div key={i.id}>
//       <img src={this.getProfile(i.chat_by)} className='img-fluid img-thumbnail rounded-circle' 
//         style={{width:'40px',height:'40px'}} alt='not found'/>
//       <span style={{marginLeft:'20px'}}>{i.chat_text}</span>
//     </div>)
//     return chat
//   }
//   handleChange=(e)=>{
//     let {value}=e.target
//     this.setState({chat_text:value})
//   }
//   handleSubmit=(e)=>{
//      e.preventDefault()
//      let text=this.state.chat_text
//      this.socket.send(JSON.stringify({chat_text:text}))
     
//   }
//   render(){
//      return reactDOM.createPortal(
     
//      <div className='fixed-top' style={{backgroundColor:'black',height:'100%'}}>
//        <div style={{backgroundColor:'red'}}>
//        <img src={this.props.img} className='img-fluid img-thumbnail rounded-circle' style={{width:'60px',height:'60px'}} alt='not found'/>
//        <span style={{color:'white',marginLeft:'80%'}} onClick={this.props.onClose}>go back</span>
//        </div>

//        <div style={{color:'white',height:'80%',overflow:'auto',marginLeft:"40px",fontFamily:'cursive'}} id='scroll_div'>
//           {this.renderChats()}
//        </div>
//        <form onSubmit={this.handleSubmit} 
//                className='form-group fixed-bottom text-center mb-3'>
//                <input type='text' value={this.state.chat_text} onChange={this.handleChange}  name='chat_text'/>
              
//                <input type='submit' value='send'/>
//           </form>       
//       </div>
      
      
//       ,document.getElementById('modal')) 
    
//     }
// }
// export default Chat
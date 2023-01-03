import {useState,useEffect,useRef} from 'react';
import reactDOM from 'react-dom';
const request_id=new Date().getTime()
const LiveChat=(props)=>{
    const [message,setMessage]=useState([])
    const [value,setValue]=useState('')
    const  socket=useRef(null)
    const  user_id=JSON.parse(atob(localStorage.getItem('refresh_token').split('.')[1])).user_id 
 useEffect(()=>{
    let unmounted;
    socket.current=new WebSocket(`ws://127.0.0.1:8000/ws/chats/?token=${localStorage.getItem('access_token')}`)  
    socket.current.onopen=()=>{
        
        socket.current.send(JSON.stringify({
            action:'notify',
            hint:'user_subscription',
            room_id:props.item_id,
            request_id:request_id
          }))

        socket.current.send(JSON.stringify({
            action:'retrieve',
            pk:props.item_id,
            request_id:request_id
        }))

        socket.current.send(JSON.stringify({
            action:'subscribe_to_message',
            pk:props.item_id,
            request_id:request_id
          }))
    }

    socket.current.onmessage=(e)=>{
        const data=JSON.parse(e.data)
        switch(data.action){
            case 'retrieve':
              if(!unmounted){
                setMessage(data.data.messages)
               } 
              break;
            case 'create':
                console.log('from create messages')
              if(!unmounted){
                  setMessage(message=>[...message,data.data])
               } 
                break;  
            default:break;  
        }
    }
    return ()=>{
         unmounted=true
    }
 },[props.item_id])
    const BackHandler=(e)=>{
        props.onClose(e)
        socket.current.close()
    }
const sendChat=(e)=>{
    e.preventDefault()
    socket.current.send(JSON.stringify({
          action:'create_message',
          room_id:props.item_id,
          text:value,
          request_id:request_id
        }))
      }
    return reactDOM.createPortal(
        <div className='fixed-top' style={{backgroundColor:'black',height:'100%'}}>
          <div style={{backgroundColor:'red'}}>
                <span style={{color:'white',marginLeft:'80%'}} onClick={BackHandler} data-itemid={props.item_id}>go back {props.item_id}</span>
          </div>
 
          <div style={{color:'white',height:'80%',overflow:'auto',marginLeft:"40px",fontFamily:'cursive'}} id='scroll_div'>
             {
                message.map(item=><div key={item.id}>
                    {item.text}
                </div>)
             }              
          </div>
          <form  onSubmit={sendChat}
                className='form-group fixed-bottom text-center mb-3'>
                <input type='text'   name='chat_text' onChange={(e)=>setValue(e.target.value)} value={value}/>
               
                <input type='submit' value='send'/>
           </form>       
       </div>
       
       
       ,document.getElementById('modal')) 
        
  }
  export default LiveChat
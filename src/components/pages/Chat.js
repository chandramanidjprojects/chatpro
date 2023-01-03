import React from 'react';
import reactDOM from 'react-dom';
import ai from './Axios';
class Chat extends React.Component{
  state={
    chats:[],
    users:this.props.users,
    chat_text:''
  }
  
  socket=new WebSocket(`ws://127.0.0.1:8000/ws/rchat/${this.props.id}/?token=${localStorage.getItem('access_token')}`)
  
  componentDidMount(){
    ai.get('/chat/'+this.props.id+'/')
    .then(res=>this.setState({chats:res.data}))
    let el=document.getElementById('scroll_div')
    el.scrollBy(0,el.scrollHeight)
    
    this.socket.onmessage=(e)=>{
      this.setState({chats:[...this.state.chats,JSON.parse(e.data)]})
    }
  }
  getProfile=(item)=>{
       let user= this.state.users.find(i=>i.id===item)
       return user.profilepicture.image
    }
  renderChats=()=>{
    let chat=this.state.chats.map(i=><div key={i.id}>
      <img src={this.getProfile(i.chat_by)} className='img-fluid img-thumbnail rounded-circle' 
        style={{width:'40px',height:'40px'}} alt='not found'/>
      <span style={{marginLeft:'20px'}}>{i.chat_text}</span>
    </div>)
    return chat
  }
  handleChange=(e)=>{
    let {value}=e.target
    this.setState({chat_text:value})
  }
  handleSubmit=(e)=>{
     e.preventDefault()
     let text=this.state.chat_text
     this.socket.send(JSON.stringify({chat_text:text}))
     
  }
  render(){
     return reactDOM.createPortal(
     
     <div className='fixed-top' style={{backgroundColor:'black',height:'100%'}}>
       <div style={{backgroundColor:'red'}}>
       <img src={this.props.img} className='img-fluid img-thumbnail rounded-circle' style={{width:'60px',height:'60px'}} alt='not found'/>
       <span style={{color:'white',marginLeft:'80%'}} onClick={this.props.onClose}>go back</span>
       </div>

       <div style={{color:'white',height:'80%',overflow:'auto',marginLeft:"40px",fontFamily:'cursive'}} id='scroll_div'>
          {this.renderChats()}
       </div>
       <form onSubmit={this.handleSubmit} 
               className='form-group fixed-bottom text-center mb-3'>
               <input type='text' value={this.state.chat_text} onChange={this.handleChange}  name='chat_text'/>
              
               <input type='submit' value='send'/>
          </form>       
      </div>
      
      
      ,document.getElementById('modal')) 
    
    }
}
export default Chat
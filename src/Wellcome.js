import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Wellcome(){
  let sty={backgroundColor:'rgba(20,50,20,0.2)'}
  let formdata=Object.freeze({username:'',password:''})  
  let [data,setData]=useState(formdata)
  let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let handleSubmit=(e)=>{
     
  }
  let history=useHistory()
  let Loginhandle=()=>{
      history.push('/login')
  }
  return <div className='text-center' style={sty}>
         <h3 style={{fontFamily:'cursive',fontStyle:'italic'}}>wellcome to chat app</h3><br />
         <form method='post' onSubmit={handleSubmit}>
          username:<input type="text" name='username' value={data.username} onChange={(e)=>handleChange(e)}/><br/><br />
          password:<input type="password" name='password' value={data.password} onChange={(e)=>handleChange(e)}/><br/>  
          <input type="submit" value='Register'className='btn btn-primary m-3'/><br/>
        </form>
        <h6 onClick={Loginhandle}> Do you have an account already ? <span className='bg-success'>click here</span></h6>
  </div>
}
export default Wellcome







// import {useState} from 'react'
// import {useHistory} from 'react-router-dom'
// import ai from './components/pages/Axios'
// function Wellcome(){
//   let formdata=Object.freeze({username:'',password:''}) 
//   let [data,setData]=useState(formdata)
//   let history=useHistory()
// let handleChange=(e)=>{
     
//      setData({...data,[e.target.name]:e.target.value.trim()})
// }
// let handleSubmit=(e)=>{
//    e.preventDefault()
//     // ai.post('/api/create/',{username:data.username,password:data.password})
//     // .then(res=>console.log(res.data)).catch(err=>console.log(err))
//    history.push('/login')
// }
//   return <div className='jumbotron'>
//        <h4 className='text-center mb-3'>wellcome to chat app</h4>
//        <form method='post' className='form-group mb-3' onSubmit={handleSubmit}>
//            username:<input type="text" name='username' value={data.username} className='form-control' onChange={handleChange}/><br />
//            password:<input type="password" name='password' value={data.password} className='form-control'  onChange={handleChange}/><br />
//            <input type="submit" value='register' className='btn btn-primary m-3'/>
//        </form>
//   </div>
// }
// export default Wellcome
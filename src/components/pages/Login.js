import { useState } from "react"
import {useHistory} from 'react-router-dom';
import ai from './Axios';
function Login(props){
let history=useHistory()
let logindata=Object.freeze({username:'',password:''})
let [data,setdata]=useState(logindata)
let handleChange=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
}
let handleSubmit=(e)=>{
  
  e.preventDefault()
  sessionStorage.setItem('username',data.username)
  sessionStorage.setItem('password',data.password)
  ai.post('/gettoken/',{username:data.username,password:data.password})
  .then(res=>{
    
    localStorage.setItem('access_token',res.data.access)
    localStorage.setItem('refresh_token',res.data.refresh)
    history.push('/home')
  })

  .catch(err=>console.log('login error:',err.response))
}
  return <div className='jumbotron text-center'>
    
    <h6>login page</h6>
    <form method='post' onSubmit={handleSubmit}>
        username:<input type='text' value={data.usename} onChange={handleChange} name='username'/><br/><br/>
        password:<input type='password' value={data.password} onChange={handleChange} name='password'/><br/><br/>
        <input type='submit' value='Login'/>
    </form>
  </div>
}
export default Login

// import {useHistory} from 'react-router-dom'
// import {useState} from 'react'
// import ai from './Axios'
// function Login(){
//   let history=useHistory()  
//   let formdata=Object.freeze({username:'',password:''}) 
//   let [data,setData]=useState(formdata)  
  
//   let handleChange=(e)=>{
     
//     setData({...data,[e.target.name]:e.target.value.trim()})
// }
// let handleSubmit=(e)=>{
//   e.preventDefault()
//   ai.post('/gettoken/',{username:data.username,password:data.password})
//   .then(res=>{

//              localStorage.setItem('access_token',res.data.access)
//              localStorage.setItem('refresh_token',res.data.refresh)
//              history.push('/home')
//              //let datas=JSON.parse(atob(res.data.refresh.split('.')[1]))

//       })
  

// }
// return <div className='container'>
//         <h4 className='text-center mb-3'>login here....</h4>
//        <form method='post' className='form-group mb-3' onSubmit={handleSubmit}>
//            username:<input type="text" name='username' value={data.username} className='form-control' onChange={handleChange}/><br />
//            password:<input type="password" name='password' value={data.password} className='form-control'  onChange={handleChange}/><br />
//            <input type="submit" value='register' className='btn btn-primary m-3'/>
//        </form>         
//   </div>
// }

// export default Login
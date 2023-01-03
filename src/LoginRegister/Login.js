import {useState} from 'react';
import ai from '../components/pages/Axios';
function Login(props){
   let obj_data=Object.freeze({email:'',password:''})
   const [data,setData]=useState(obj_data)
  
   const HandleChange=(e)=>{
         setData({...data,[e.target.name]:e.target.value})
   }
   const HandleSubmit=async(e)=>{
     e.preventDefault()
     try{
      const res=await ai.post('/gettoken/',{email:data.email,password:data.password})
      localStorage.setItem('access_token',res.data.access)
      localStorage.setItem('refresh_token',res.data.refresh)
      props.setRefresh(res.data.refresh)
     }
     catch(err){
      console.log(err)
     }
   }
   return <div className='jumbotron text-center'>    
   <h6>login page</h6>
   <form method='post' onSubmit={HandleSubmit} >
       email:<input type='text'  name='email'
                  value={data.email}
                  onChange={HandleChange}
       /><br/><br/>
       password:<input type='password'  name='password'
                   value={data.password}
                   onChange={HandleChange}
       
       /><br/><br/>
       <input type='submit' value='Login'/>
   </form>
 </div>
}
export default Login


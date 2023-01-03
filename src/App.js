import {BrowserRouter,Route,useNavigate, Routes, Navigate} from 'react-router-dom';
import {useState} from 'react';
import Navbar from './components/pages/Navbar';
import LoginNavbar from './components/LoginNavbar';
import Login from './LoginRegister/Login';
import Posts from './components/pages/Posts';
import Comments from './components/pages/Comments';
import Status from './components/status/Status';
import ProfileComments from './components/status/ProfileComments';
import StatusComments from './components/status/StatusComments';
import Chat from './components/chats/Chat';
function App(){
  const [refresh,setRefresh]=useState(localStorage.getItem('refresh_token'))
  return <div className='container'>
           <BrowserRouter>
           {
            refresh ?
            <>
            <Routes>
              <Route path='/' element={<Navbar />}>
                 <Route index element={<Navigate to='post'/>}/>
                 <Route path='status' element={<Status />}/> 
                 <Route path='chat' element={<Chat />}/>
                 <Route path='post' element={<Posts />}/>
                 <Route path='menu' element={<Menu setRefresh={setRefresh}/>} />                
              </Route>
            <Route path='postcomments' element={<Comments />} />
            <Route path='profilecomments' element={<ProfileComments />} />
            <Route path='statuscomments' element={<StatusComments />} />
            </Routes>
            </> :
            <>
             <LoginNavbar /> 
             <Routes>
               <Route  path='/' element={<Login setRefresh={setRefresh}/>}/>

               </Routes>
            </>
           }

           </BrowserRouter>
           </div>
}
export default App





const Menu=(props)=>{
  const navigate=useNavigate()
return <h1 onClick={()=>{
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  navigate('/')
  props.setRefresh('')
 

}}
  >logout</h1>
}














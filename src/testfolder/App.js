import { useEffect } from 'react';
import {useGlobalContext} from './Context';
function App(){
  const {count,Handle}= useGlobalContext()
useEffect(()=>{
  Handle()
},[])
return <div>
    <h6 onClick={Handle}>app component {count}</h6>
  </div>
}
export default App











// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Home from './Home';
// import Layout from './Layout';
// import Posts from './Posts';
// import PostLayout from './PostLayout';
// import PostDetail from './PostDetail';
// function App(){
//   return <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
//                   <Route path='about' element={<About />}/>
//                   <Route path='contact' element={<Contact />}/>
//                   <Route path='post' element={<PostLayout />}>
//                      <Route path=':catagory' element={<PostDetail />}/>
//                      <Route index element={<Posts />} />
//                   </Route>  
//                   <Route path='home' element={<Home />}/>
//                 </Route>  
//             </Routes>
//   </BrowserRouter>
// }
// export default App

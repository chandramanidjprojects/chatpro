import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';

function App(){
  return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
            
               <Route path='home' element={<Home name='mani' />}>
                  <Route path=':id' element={<Post />}/>
               </Route>
               <Route path='about' element={<About />}/>

               
            </Route>    
           <Route path='post' element={<Post />}/>
        </Routes>
  </BrowserRouter>
}
export default App

const Post=()=>{
    return <h3>posts</h3>
}


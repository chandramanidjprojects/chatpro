import { useLocation,Outlet,useParams,useSearchParams,useNavigate } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux';
import { addItem } from "./features/counterSlice";
import { useState } from "react";
function Home(props){
    let items=useSelector(state=>state.stateItems.items)
    const [text,setText]=useState('')
    let dispatch=useDispatch()
    return <>
      <h3 > home page  </h3>
      <input placeholder="add items here..."
         onChange={(e)=>setText(e.target.value)}
      />
      <button onClick={()=>{
        dispatch(addItem(text))
      }}>add</button>
      <ul>
        {
      items.map((item,index)=><li key={index}>{item}</li>)  
        }
      </ul>

    </>
}
export default Home
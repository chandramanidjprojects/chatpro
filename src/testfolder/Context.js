import {createContext,useContext,useEffect,useReducer} from 'react';
import App from './App';
import Reducer from './Reducer';
const initialState={
  count:0,

}
const reducer=(state,action)=>{
  if(action.type==='increment'){
    return {...state,count:state.count+1}
  }
}
const ContextAPI=createContext()

function ContextProvider({children}){
   const [state,dispatch]=useReducer(reducer,initialState)
   const Handle=()=>{
     return dispatch({type:'increment'})
   }
   return <ContextAPI.Provider value={{...state,Handle}}>
      <App />
   </ContextAPI.Provider>
}

const useGlobalContext=()=>{
  return   useContext(ContextAPI)
}

export {ContextProvider,useGlobalContext}
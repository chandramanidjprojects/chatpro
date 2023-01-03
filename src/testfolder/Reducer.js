function Reducer(state,action){
  console.log(state)
  if(action.type==='handlecount'){
    return {
      ...state,count:state.count+1
}
  }  
}
export default Reducer


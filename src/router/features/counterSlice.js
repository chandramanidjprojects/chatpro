import {createSlice} from '@reduxjs/toolkit';
const initialValue={
    items:[11,22,33,44,55]
}

export const itemSlice=createSlice({
    name:'items',
    initialState:initialValue,
    reducers:{
        addItem:(state,action)=>{
           state.items=[...state.items,action.payload]   
        }
    }
})
export const {addItem} = itemSlice.actions
export default itemSlice.reducer


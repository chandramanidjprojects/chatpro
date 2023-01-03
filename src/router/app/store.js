import {configureStore} from '@reduxjs/toolkit';
import  itemReducer  from '../features/counterSlice';

export const store=configureStore({
    reducer:{
        stateItems:itemReducer
    }
})

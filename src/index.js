import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import App from './redux/App'
//import {Provider} from 'react-redux';
//import {store} from './redux/app/store';
//import { ContextProvider } from './testfolder/Context';
import App from './router/App';
import {Provider} from 'react-redux';
import {store} from './router/app/store';
ReactDOM.render(
  <Provider store={store}>
       <App /> 
  </Provider>
     
  

  
,
document.getElementById('root'))


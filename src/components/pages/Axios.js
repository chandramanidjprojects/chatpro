import axios from 'axios';
const ai=axios.create({
  baseURL:'http://127.0.0.1:8000/',
  headers:{
    Authorization:localStorage.getItem('access_token') ? 'Bearer '+localStorage.getItem('access_token') : null
  }
})

ai.interceptors.response.use(
  res=>res,
  error=>{
    let original=error.config
    console.log('original...',error)
    if(error.response.status===401 && error.response.data.code==='token_not_valid' && error.response.statusText==='Unauthorized'){
      let token=localStorage.getItem('refresh_token')
      if(token){
           let tp=JSON.parse(atob(token.split('.')[1]))
           let exp=tp.exp
           let now=Math.ceil(Date.now()/1000)
           if(exp>now){
                return ai.post('/refresh/',{refresh:token})
                   .then(res=>{
                       localStorage.setItem('access_token',res.data.access)
                       localStorage.setItem('refresh_token',res.data.refresh)
                       ai.defaults.headers['Authorization']='Bearer '+res.data.access                                              
                       original.headers['Authorization']='Bearer '+res.data.access
                       return ai(original)
                   })               
           }else{
             console.log('token expired')
           }
      }else{
        console.log('token not available')
      }
    }else{
      console.log('network bussy')
    }

  }
)
export default ai













// import axios from 'axios'
// import {useHistory} from 'react-router-dom'
// const ai=axios.create({

//     baseURL:'/get_api/',
//     headers:{
    
//       Authorization: localStorage.getItem('access_token') ? 'Bearer '+ localStorage.getItem('access_token') : null

//     }        
// })
// ai.interceptors.response.use(res=>res,
//   error=>{
//     let oreq=error.config
//     if(error.response.status===401 && error.response.data.code==='token_not_valid' && 
//       error.response.statusText==='Unauthorized')
//     {
//         let refreshToken=localStorage.getItem('refresh_token')
//         if(refreshToken){
//             let tokenParts=JSON.parse(atob(refreshToken.split('.')[1]))
//             let expiry=tokenParts.exp
//             let now=Math.ceil(Date.now()/1000)
//             if(expiry>now)
//             {
//              return ai.post('/refresh/',{refresh:refreshToken})
//                  .then(res=>{
//                     localStorage.setItem('access_token',res.data.access)
//                     localStorage.setItem('refresh_token',res.data.refresh)
//                     ai.defaults.headers['Authorization']='Bearer '+res.data.access
//                     oreq.headers['Authorization']='Bearer '+res.data.access
//                     return ai(oreq)
//                   }).catch(error=>console.log(error))
//             }else{console.log('refresh token expired...')
//                       window.location.href='/login/'
//                   }
//         }else{console.log('refresh token not available')
//                window.location.href='/login/'
//              }
                       
//     }
//     return Promise.reject(error)
//   }
// )
// export default ai
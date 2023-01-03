import axios from 'axios';
async function Myaxios(){
const ax=axios.create({
    baseURL:'http://127.0.0.1:8000/',
    headers:{
        Authorization:localStorage.getItem('access_token') ?'Bearer '+ localStorage.getItem('access_token') :null
      }
 })
ax.interceptors.response.use(res=>{
    console.log('res in interceptors',res)
    return res
},
    async error=>{
        console.log('err in interceotirs',JSON.stringify(error.response))    
        let oreq=error.config
        if(error.response.data.code==='token_not_valid' && error.response.status===401){
            let refresh_token=localStorage.getItem('refresh_token')
            const res = await axios.post('/refresh/', { refresh: refresh_token })
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
            ax.defaults.headers['Authorization'] = 'Bearer ' + res.data.access
            oreq.headers['Authorization'] = 'Bearer ' + res.data.access
            return await ax(oreq)
        }
        return   Promise.reject(error)

    }
)
return ax
}
export default Myaxios


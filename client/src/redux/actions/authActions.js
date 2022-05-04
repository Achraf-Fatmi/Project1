import axios from 'axios'
import { ERRORS } from '../types'


export const Registration =(form)=> dispatch => {
    axios.post ('/api/userregister',form)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        dispatch({
            type:ERRORS,
            payload: err.response.data
        })
    })
}
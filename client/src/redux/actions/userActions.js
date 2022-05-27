import axios from "axios";
import {message} from 'antd';

export const userLogin = (reqObj)=> async dispatch =>{

    dispatch({
        type:'LOADING',
         payload:true
        })

    try {
        const response = await axios.post('/api/users/login', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Login success')
            dispatch({
                type: 'LOADING',
                 payload:false
            })
            
    }catch(error) {
        console.log(error)
        message.error('something went wrong')
        dispatch({
            type:'LOADING',
             payload:false
            })

    }
}




export const userRegister= (reqObj)=> async dispatch =>{

    dispatch({
        type:'LOADING',
         payload:true
        })

    try {
        const response = await axios.post('/api/users/login', reqObj)
            dispatch({
                type: 'LOADING',
                 payload:false
            })
            message.success('Registration Successfull')
            
    }catch(error) {
        console.log(error)
        dispatch({
            type:'LOADING',
             payload:false
            })
            message.error('something went wrong') 

    }
}




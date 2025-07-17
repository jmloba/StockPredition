import React from 'react'
import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({

  baseURL : baseURL,
  headers :{
    'Content-Type':'application/json',
  }

})

// request interceptors
axiosInstance.interceptors.request.use(
  function(config){
    console.log('inside axiosinstance interceptor')
    console.log('request without authorization header-before ->', config)
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken){
      config.headers['Authorization']=`Bearer ${accessToken}`
    }
    console.log('config', config)
    return config
  },
  
  function(error){
    return Promise.reject(error);

  },
)

// response interceptors
axiosInstance.interceptors.response.use(
  function(response){
    return response
  },
  // handle failed responses
  async function(error){

    const originalRequest = error.config

    console.log('***-->>\n function error',error.response.status)

    if(error.response.status ===  401 && !originalRequest.retry){
        originalRequest.retry=true
      const refreshToken = localStorage.getItem('refreshToken')
      try{
        const response = await axiosInstance.post('/token/refresh/',{refresh : refreshToken})
        console.log(' \n\nNew >>>Access Token response --->', response.data.access)

        // save to localStorage
        localStorage.setItem('accessToken',response.data.access)
        originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
        return axiosInstance(originalRequest)

      }catch(error){
        // removing the expired accessToken and refreshToken
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        

      }

    }
    return Promise.reject(error)
  }

)




export default axiosInstance
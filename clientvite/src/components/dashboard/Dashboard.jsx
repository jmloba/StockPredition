import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {


  useEffect( ()=>{
     const fetchProtectedData = async ()=>{
      try{
        const response =  await axiosInstance.get('/protected-view/')
        console.log('Success-->:',response.data)
      }catch(error){
        console.log('error is : ', error)
      }
     }

    fetchProtectedData();

  },[])

  return (
    <>
    <h3 className='container text-light'>Dashboard</h3>
    </>
    
  )
}

export default Dashboard
import { useState } from 'react'

import './assets/css/generalcss.css'

import TestPage from './components/TestPage'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import UserRegistration from './components/UserRegistration'
import Login from './components/login'



import {BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} /> 
        <Route path='/register/' element={<UserRegistration/>} /> 

        <Route path='/login/' element={<Login/>} /> 


      </Routes>
      <Footer/>
    </BrowserRouter>
      
 
    </>
  )
}

export default App

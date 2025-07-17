import { useState } from 'react'

import './assets/css/generalcss.css'

import TestPage from './components/TestPage'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import UserRegistration from './components/UserRegistration'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'



import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'


function App() {
  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>} /> 
          <Route path='/register/' element={
            <PublicRoute>
              <UserRegistration/>
            </PublicRoute>

          } /> 

          <Route path='/login/' element={
            <PublicRoute>
              <Login></Login>
            </PublicRoute>
          } /> 
          
          <Route path='/dashboard/' element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          } /> 


        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>  
 
    </>
  )
}

export default App

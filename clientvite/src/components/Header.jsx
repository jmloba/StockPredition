import React from 'react'
import Button from './Button'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import {useNavigate} from 'react-router-dom'


const Header = () => {
  const {isLoggedIn,setisLoggedIn}= useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout= (e)=>{
    e.preventDefault()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setisLoggedIn(false)
    navigate('/login')


  }

  return (
    <>
    <nav className='navbar container text-light pt-3 pb-3 align-items-start'>
      <Link to="/"  className='navbar-brand text-light' >Header </Link>
      <div >
        {isLoggedIn ? (
          
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        ):(
          <>

            <Button text='Login' url='/login' class='btn-outline-info'/>        
            &nbsp;
            <Button text='Register' url="/register"  class='btn-info'/>               
          </>
        )}


   
      </div>

    </nav>
    </>

    

  )
}

export default Header
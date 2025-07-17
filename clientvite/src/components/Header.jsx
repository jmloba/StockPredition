import React from 'react'
import Button from './Button'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
    <nav className='navbar container text-light pt-3 pb-3 align-items-start'>
      <Link to="/"  className='navbar-brand text-light' >Header </Link>
      <div >
        <Button 
            text='Login' 
            url='/login'
            class='btn-outline-info'/>        
        &nbsp;&nbsp;
        <Button 
          text='Register' 
          url="/register" 
          class='btn-info'/>        

      </div>

    </nav>
    </>

    

  )
}

export default Header
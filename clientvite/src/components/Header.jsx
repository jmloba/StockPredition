import React from 'react'
import ButtonLogin from './ButtonLogin'

const Header = () => {
  return (
    <>
    <nav className='navbar container text-light pt-3 pb-3 align-items-start'>
      <a className='navbar-brand text-light'  href="">Header </a>
      <div >
        <ButtonLogin text='Login' class='btn-outline-info'/>        
        &nbsp;&nbsp;
        <ButtonLogin text='Register' class='btn-info'/>        

      </div>

    </nav>
    </>

    

  )
}

export default Header
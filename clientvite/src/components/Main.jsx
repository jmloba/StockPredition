import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    
    <>
    
    <div className="container text-light">

      <div className="p-5 text-center bg-light-blue">
        <h5 className='text-center'>Stock Prediction Portal</h5>
        <p className='text-center text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis repellat nostrum! Sed libero quia vitae veniam qui beatae facilis?</p>


        <Button text='Explore' url="/dashboard" class='btn-outline-info'/>
      </div>

    </div>
    
    </>
  )
}

export default Main
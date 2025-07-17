import React ,{useContext, useState}from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'



const Login = () => {
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const [errors,setErrors]= useState('')

  const {isLoggedIn,setisLoggedIn}= useContext(AuthContext)

  const handleLogin = async (e)=>{
    e.preventDefault()
    setLoading(true)

    const userData ={ username,password}
    console.log(
      'username :',username,
      '\n password :',password, 
    
    )
    console.log('userdata->', userData)
    try{
      const response = await axios.post('http://localhost:8000/api/v1/token/', userData)

      console.log('\n\n *** Response is :', response.data)

      // store access token to local storage
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)

      console.log('\n***Access token is ->', localStorage.getItem('accessToken'))
      console.log('\n***Refresh token is ->', localStorage.getItem('refreshToken'))
      console.log('Login Successful')
      setisLoggedIn(true)
      navigate('/')



    }catch(error){
      console.log("error ->: invalid credentials :", error)
      setErrors('Invalid Credentials')
    }finally{
      setLoading(false)
    }


  }

  return (
    <>
    <div className='container main-container'>
      <div className="row   justify-content-center">
        <div className="col-md-6  text-center bg-light-blue p-2 mb-4">
          <h3 className='text-light text-center' >Login to  Portal </h3>
          <form  onSubmit={handleLogin} >
            <div className="mb-3">
              <input type="text" className="form-control " 
                placeholder='enter username' value={username} 
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>

        
            <div className="mb-3">

            <input type="text" className="form-control mb-3" 
            placeholder='password' value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            
            </div>
            <small>
              {
                errors && 
                <div className='alert alert-danger'>{errors}</div>
              }
            </small>
            

            {loading ? (
               <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Loggin in...</button>
            ):(
               <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>

            )

            }




          </form>

        </div>
        
      </div>


    </div>
    </>
    
  )
}

export default Login
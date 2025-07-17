import React,{useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'



const UserRegistration = () => {
  const [username,setUsername]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [errors,setErrors]= useState({})
  const[success,setSuccess]=useState(false)
  const [loading,setLoading] = useState(false)

  const handleRegistration =async (e)=>{
  
    e.preventDefault()
    setLoading(true)

    const userData ={ username,email,password}
    console.log('username :',username,'\n password :',password, '\n email :',email)
    console.log('userdata->', userData)

    // send the data to server
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
      console.log('\n\n Response.data --->>>',response.data)
      console.log('resistration successful')
      setErrors({})
      setSuccess(true)

    }catch(error){
      console.error('error try: ',error.response.data)
      setErrors(error.response.data)

    }finally{
      setLoading(false)
    }


    

  }

  return (
    <>
    <div className='container main-container'>
      <div className="row   justify-content-center">
        <div className="col-md-6  text-center bg-light-blue p-2 mb-4">
          <h3 text-light text-center>Create Account </h3>
          <form  method='POST' onSubmit={handleRegistration}>
            <div className="mb-3">
              <input type="text" className="form-control " 
                placeholder='enter username' value={username} 
                onChange={(e)=>setUsername(e.target.value)}/>
              <small>{
                errors.username && <div className="text-danger">{errors.username}</div>
                }
              </small>  
            </div>
            <div className="mb-3">
              <input type="email" className="form-control mb-3" 
                placeholder='enter email' value={email} 
                onChange={(e)=> setEmail(e.target.value)}/>
              <small>{
              errors.email && <div className="text-danger">{errors.email}</div>
              }
              </small>  
            </div>
            <div className="mb-3">

            <input type="text" className="form-control mb-3" 
            placeholder='password' value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <small>{
              errors.password && <div className="text-danger">{errors.password}</div>
              }
            </small>  
            </div>
            {success && <div className="alert alert-success">"Registration successful..."</div>
              } 

            {loading ? (
               <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please wait</button>
            ):(
               <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>

            )

            }




          </form>

        </div>
        
      </div>


    </div>
    </>
  
  )
}

export default UserRegistration
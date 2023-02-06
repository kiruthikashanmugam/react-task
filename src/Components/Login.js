import {useState} from 'react';
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
//  import { Form, Button } from 'semantic-ui-react';
//  import { useForm } from "react-hook-form";

const Login = () => {
  const [user,setUser]=useState('');
  const auth=useAuth();
  const navigate=useNavigate();
 

  // const redirectpath =location.state?.path || '/'

  const handleLogin=()=>{
    auth.login(user)
    navigate('/profile',{replace:true})
  }
  

  // form validation
  // const { register, handleSubmit, formState: { errors } } = useForm();
  //      const onSubmit = (data) => {
  //         console.log(data);
  //      }

  return (
    <div>
      
     
        <label>
          <h1 my-3 >FORM VALIDATION</h1>
        Username:{''}
       
        <input  type='text' onChange={e=>setUser(e.target.value)} ></input> 
        </label><br></br>
        
        
        <br></br>
        <button className='my-4' onClick={handleLogin}>submit button </button>
        
    </div>
  )
}

export default Login




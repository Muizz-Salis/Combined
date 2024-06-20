import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Register = () => {

  // const navigate = useNavigate();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let url ="https://combined-one.vercel.app"
  // let url ="http://localhost:5000/signup"
   const navigate = useNavigate()
  
  const registerUser = () =>{
    console.log(firstName,lastName,email,password);
    axios
    .post(url,{firstName,lastName,email,password})
    .then((res)=>{
      console.log(res.data);
      navigate("/signin")
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }


  return (
    <>
    
      <div className='p-3'>
       <label htmlFor="" >FirstName</label>
        <input type="text" 
        className='form-control'
        name='firstName'
        onChange={(e)=>setFirstName(e.target.value)}/>


        <label htmlFor="">LastName</label>
        <input type="text" 
        name='lastName'
        className='form-control'
        onChange={(e)=>setLastName(e.target.value)}/>
        

        <label htmlFor="">Email</label>
        <input type="text" 
        name='email'
        className='form-control'
        onChange={(e)=>setEmail(e.target.value)}/>
        

        <label htmlFor="">Password</label>
        <input type="text" 
        className='form-control'
        name='password'
        onChange={(e)=>setPassword(e.target.value)}/>
        

        <button onClick={registerUser} className='btn btn-primary mt-3 mx-auto d-block w-75'>SignUp</button>
       </div>
    
    
    </>
  )
}

export default Register
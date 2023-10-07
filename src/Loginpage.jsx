/* eslint-disable react/prop-types */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{ SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/twitter'
import { Register } from './Register'



export const Loginpage = ({credentials}) => {

  const [reg,setReg] = useState(false);
  const naveigateTo = useNavigate();

  const handleRegister = ()=>{
    setReg(true);
  }

  //authentication.
  const handleSubmit = async (e)=> {
    e.preventDefault();
    
    const authenticationPoint = "http://localhost:4000/data";

    try{
      const res = await fetch(authenticationPoint, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({email, password})
      })

      if(res.ok)
      {
        console.log("login succeful")
        //login successful
        naveigateTo('/')
      }
      else{
        alert('Login Failed, Please try again')
      }

    }catch(err){
        console.log('Error at login :', err)
        alert('An error occurred')
    }

    credentials({email,password});

  }

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')




  return (
    <>
        
        <form className="container" onSubmit={handleSubmit}>
        <div className="form-group ">
            
            <p style={{textAlign:"left"}} >Email address</p>
            <input 
              type="email" 
              name='email'
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              placeholder="Enter email" 
            />
            
        </div>
        <div className="form-group">
            <p style={{textAlign:"left"}} className="text-left" htmlFor="exampleInputPassword1">Password</p>
            <input 
              type="password" 
              name='password'
              value={password}
              onChange={ (e)=>{
                setPassword(e.target.value)
              } }
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Password" 
            />
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <p style={{textAlign:"left"}} className=" form-check-label" htmlFor="exampleCheck1">I agree all statements in <a href="#">Terms of service</a></p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <br/>
        
        <p>Not a user? <Link to={'/register'} onClick={handleRegister} >Register</Link></p>
        {reg && <Register/>}

        {/* Optional in future */}
        <p>Sign in with:</p>
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://twitter.com" />
   

    </>
  )
}

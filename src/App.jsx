

import { useEffect, useState } from 'react';
import './App.css'
// import { useState } from 'react';
import { Loginpage } from './Loginpage'
import { Register } from './Register';
import { Users } from './Users';
import {Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom' 

function App() {
 
  const navigateTo = useNavigate();
  
  const handleRegister =()=>{
    navigateTo("/register")
  }

  const handleLogin = () => {
    navigateTo("/login")
  }

  
  // eslint-disable-next-line no-unused-vars
  const [data,setData] = useState([]);
  
  const formData = async (userDetails)=>{
    
    //posting on server
    const response = await fetch('http://localhost:4000/data',
    {
      method:'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userDetails)
    })
    
    const responseData = await response.json();

    setData([...data,responseData])
    console.log("posting data:" + responseData)
  }

  useEffect(()=>{
    const getUserDet = async ()=>{
      const userDetailsFromServer = await fetchUserDet()
      setData(userDetailsFromServer)
    }

    getUserDet()
  }, [])

  const fetchUserDet = async ()=>{
    const response = await  fetch("http://localhost:4000/data")
    const data = await response.json()

    // console.log(data);
    return data;
  }

  //login
  const credentials = (creds)=>{

    console.log(creds.email)
  }

  return (
    <>
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
        
        <button className='btn btn-success' onClick={handleRegister}>Register</button>

        {/* Main Dashboard of users */}
        <Routes path='/' element>
          <Route path='/login' element={<Loginpage credentials={credentials}/>}></Route>
          <Route path='/register' element={<Register savedData={formData}/>}></Route>
          <Route index element={<Users details={data} />}></Route>
        </Routes>



        {/* <h1>hi there, {data.name}{data.email}</h1> */}
      

        {/* if login & register button is clicked then the register form will open. */}
        {/* {login && <Loginpage/>} */}

        {/* These must be in Login page */}
        {/* {register && <Register/>} */}

        
    </>
  )
}

export default App

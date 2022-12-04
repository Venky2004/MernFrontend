import React from 'react'
import { useState } from 'react';
import { Button, input,Paper} from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../Guest/NavBar'
export default function Signup() {
  const navigate=useNavigate(false)

   var [name,setFullName]= useState(null);
  var [mail,setEmail]=useState(null);
  var [pwd,setPassword]=useState(null);

  function signupdata(){
    const registerdata={
      fullname:name,
      email:mail,
      password:pwd
    }
    console.log(registerdata);
    axios.post("http://localhost:2000/api/register",registerdata)
    .then(response=> {
      navigate('/login')
    })
    .catch(e=>console.log(e))

  }
  return (
    <center>
      <Navbar/>
                <Paper sx={{ width: 400, border: 'none', padding: 5, margin: 5, borderRadius: 5, backgroundColor: '#cfd8dc ' }} elevation={24}>
                    <br />
                    <div>
           <h1>Sign Up</h1>
 <input
            type="text"
            style={{ width: "300px",margin:10 }}
            placeholder="Full Name"
            value={name}
            onChange={(e)=>{setFullName(e.target.value)}}
          />
          <br/>
 <input
            type="text"
            style={{ width: "300px",margin:10 }}
            placeholder="Email"
            value={mail}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br/>
 <input
            fullWidth
            type="password"
            style={{ width: "300px",margin:10 }}
            placeholder="Password"
            value={pwd}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br/>
         <Button
          variant="contained"
          style={{ marginTop: "30px",margin:"10px" }}
          color="secondary"
          onClick={signupdata}
        >
          SignUp
        </Button>
        <br/>
            <Button variant='text'>Forgot Password</Button>
            <Button variant="text" onClick={()=>{ navigate(`/login`)}} sx={{mb:2}}>Already have an Account?Login Here</Button>
         </div>
                </Paper>
            </center>
  )
}

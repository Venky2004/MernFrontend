import { Button ,Typography,Paper,ButtonGroup} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Google from './Images/google.png';
import Apple from './Images/apple.png';
import Facebook from './Images/facebook.png';
import Twitter from './Images/twitter.png';
import NavBar from '../Guest/NavBar';


function Login() {
  var [errmsg,seterrmsg]=useState(null);
  const navigate=useNavigate(false)
  var [mail,setEmail]=useState(null);
  var [pwd,setPassword]=useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['dummycookie']);
  function signindata(){
    const logindata={
      email:mail,
      password:pwd
    }
    axios.post("http://localhost:2000/api/login",logindata)
    .then(response=> {
      console.log(response)
      if(response.status=200){
        setCookie('token', response.data.token, { path: '/' });
        if(response.data.role==="Farmer"){
        navigate('/shopping')  
        }
        else if(response.data.role==="Admin"){
          navigate('/sellers')  
          }
      }
      else{
        seterrmsg(response.message);

        navigate('/login')  
      }
    })
    .catch(e=>console.log(e))

  }
  return (
    
    <center >
<NavBar/>
       <Paper sx={{ maxWidth: 400, minHeight: 500, maxHeight: 600, margin: 5, borderRadius: 5, backgroundColor: '#cfd8dc ', zIndex: 999 }} elevation={20} >
           <br />
           <Typography style={{ letterSpacing: 15, fontFamily: 'sans-serif', fontSize: 25, margin: 5 }}><b>WELCOME</b></Typography>
           <br />
           <input placeholder='User Name' style={{ padding: 25, margin: 15,background:"transparent",height:5,width:250,borderRadius:50  }} 
            type="text"
            label="Email"
            value={mail}
            onChange={(e)=>{setEmail(e.target.value)}}/>
           <input placeholder='Password' type="password" style={{ padding: 25, margin: 5,height:5,background:"transparent",width:250,borderRadius:50 }}
            label="Password"
            value={pwd}
            onChange={(e)=>{setPassword(e.target.value)}}></input>
           <br />
           <Button variant="contained" sx={{ width: 200, height: 40, margin: 3, borderRadius: 5 }}
          style={{ marginTop: "40px" }}
          fullWidth
          color="secondary"
          onClick={signindata}>Login</Button>
           {/* <Typography>OR LOGIN WITH</Typography>
           <hr style={{ width: 300, padding: 2, visibility: 'transparent' }} />
           <ButtonGroup variant="textf" sx={{ padding: 2 ,width:200}}>
               <Button><img src={Google} width='30' alt="Google" /></Button>
               <Button><img src={Facebook} width='30'alt="Facebook" /></Button>
               <Button><img src={Apple} width='30' alt="Apple"/></Button>
               <Button><img src={Twitter} width='30'alt="Twitter" /></Button>
           </ButtonGroup> */}
           <br />
           <Button variant='text'>Forgot Password</Button>
            <Button variant="text" onClick={()=>{ navigate(`/register`)}} sx={{mb:2}}>Don't have an account?Register Here</Button>
       </Paper>
       
   </center>
  );
}

export default Login;
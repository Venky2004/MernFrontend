import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import {Rating} from '@mui/material';
import Box from '@mui/material/Box';
import Navbar from '../../Components/Navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Feedback() {
  const navigate=useNavigate(false)
  const [value, setValue] = React.useState(2);
  var [prname,setpname]= useState(null);
  var [elemail,setemail]=useState(null);
  var [phno,setphone]=useState(null);
  var [msg,setmsg]=useState(null);
  

 function sdata(){
   const senddata={
     name:prname,
     email:elemail,
     phone:phno,
     message: msg,
     rating:value
   }
   console.log(senddata);
   axios.post("http://localhost:2000/api/sendfeedback",senddata)
   .then(response=> {
     navigate('/feedback')
     alert("Successfully Submitted")
     rdata();
   })
   .catch(e=>console.log(e))

 }

 
 function rdata(){
 setpname('');
 setValue(2);
 setmsg('');
 setemail('');
 setphone('');
 }

  return (
    <div> 
      <Navbar/>
    <br/>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }} elevation={24}>
          <CardContent>
            <Typography gutterBottom variant="h4">
              Feedback
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Give us your suggestions so we can improve our app.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Enter name" label="Name" variant="outlined" fullWidth required value={prname}
            onChange={(e)=>{setpname(e.target.value)}} />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required value={elemail}
            onChange={(e)=>{setemail(e.target.value)}}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required value={phno}
            onChange={(e)=>{setphone(e.target.value)}}/>
                </Grid>
                <Grid>
                <center>
                <Box
      sx={{
        "& > legend": { mt: 2 }
      }}
    >
      <Typography component="legend">Rate Us</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
    </center>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField label="Feedback" multiline rows={4} placeholder="Issue" variant="outlined" fullWidth required  value={msg}
            onChange={(e)=>{setmsg(e.target.value)}}/>
                </Grid>    
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth   onClick={sdata}>Submit</Button>
                </Grid>
                <Grid item xs={12}>
                
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Feedback;
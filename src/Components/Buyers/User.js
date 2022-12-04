import React from 'react'
import Card  from '@mui/material/Card'
import {useState,useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button'

const User = ({props}) => {
const [name,setname]=useState("");

const updateName=(id)=>{
    console.log(id);
    axios.put("http://localhost:2000/api/upuser/",{id:id,upName:name,});
  }
  const deleteStud=(id)=>{
    console.log(id);
    alert("Record will be deleted");
    axios.delete(`http://localhost:2000/api/deluser/${id}`);
    
  }
  return (
    <center>
    <Card sx={{ width:400, height: 250,margin:5,padding:5 ,textAlign:"left"}} elevation={24}>Name : {props.fullname}
    <br/>
     Email:{props.email}
    <br/>
    Date of Registeration:{props.date}
    <br/>
  <Button onClick={()=>deleteStud(props._id)}
  variant="contained" color='error' style={{margin:50}}>Delete</Button>
    </Card>
    </center>
  )
}

export default User
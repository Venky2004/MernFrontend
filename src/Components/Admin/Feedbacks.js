import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import  Rating  from '@mui/material/Rating';
import './Feedback.css'

const Feedbacks = () => {
    const[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:2000/api/feedbacks").then((response)=>{
      setdata(response.data);
    })
  },[]);
  return (
    <div className='text'>
        <br/>
        <br/>
<Card>
    <center><h1>FEEDBACKS</h1></center>
    <br />
    {data.map((val,key)=>{{
      return(
        <div>
            <div className='border Profilecard' style={{margin:25, padding:60}}>
               <h5><b>Name: </b>
               <span>{val.name}</span>
               </h5>
               <h5><b>Email: </b>
               <span>{val.email}</span>
               </h5>
               <h5><b>Phone: </b>
               <span>{val.phone}</span>
               </h5>
               <h5><b>Rating: </b>
               <span><Rating
        name="simple-controlled"
        value={val.rating} disabled
      /></span>
               </h5>
               <h5><b>Message: </b>
               <span>{val.message}</span>
               </h5>
            </div>
        
        </div>
      )
    }})}
</Card>
  </div>
  )
}

export default Feedbacks
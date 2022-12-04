import React from 'react'
import User from './User'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Buyers = () => {
  const[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:2000/api/users").then((response)=>{
      setdata(response.data);
    })
  },[]);
  return (
    <div>
    {data.map((val,key)=>{if(val.role==="Admin"){
      return(
        <User props={val}></User>
      )
    }})}
  </div>
  )
}
export default Buyers
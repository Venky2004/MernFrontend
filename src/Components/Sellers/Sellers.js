import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import User from './User';

const Sellers = () => {
  const[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:2000/api/users").then((response)=>{
      setdata(response.data);
    })
  },[]);

  return (
    <div>
      {data.map((val,key)=>{if(val.role==="Farmer"){
        return(
          <User props={val}></User>
        )
      }})}
    </div>
  )
}

export default Sellers
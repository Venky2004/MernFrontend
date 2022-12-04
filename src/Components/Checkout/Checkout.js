import React from 'react'
import { useState } from 'react';
import { Button,Paper} from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Stack } from '@mui/system';
export default function Signup() {
  const navigate=useNavigate(false)

   var [prname,setpname]= useState(null);
   var [qua,setquantity]=useState(null);
   var [cat,setcategory]=useState(null);
   var [pri,setprice]=useState(null);
   var [qual,setquality]=useState(null);
   var [del,setdeliverable]=useState(null);
   var [des,setdescription]=useState(null);
   var [add,setaddress]=useState(null);
   var [pho,setphno]=useState(null);
   var [pic,setpic]=useState(null);

  function sdata(){
    const senddata={
      pname:prname,
      quantity:qua,
      category:cat,
      price: pri,
      quality:qual,
      deliverable:del,
      description:des,
      faddress:add,
      phno:pho,
      picture:pic,
    }
    console.log(senddata);
    axios.post("http://localhost:2000/api/send",senddata)
    .then(response=> {
      navigate('/checkout')
      alert("Successfully Submitted")
      rdata();
    })
    .catch(e=>console.log(e))

  }

  
  function rdata(){
  setpname('');
  setquantity('');
  setquality('');
  setcategory('');
  setphno('');
  setprice('');
  setdeliverable('');
  setdescription('');
  setaddress('');
  setpic("");
  }
  return (
    <center>
                <Paper sx={{ width: 650, border: 'none', padding: 5, borderRadius: 5, backgroundColor: '#cfd8dc ' }} elevation={24}>
                    <div>
           <h1>Fill the form to post the selling request</h1>
           <Stack direction="row" spacing={5}>
<span style={{width:400 ,textAlign:"left"}}>
<input
            type="text"
            style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Product Name"
            value={prname}
            onChange={(e)=>{setpname(e.target.value)}}
          />
          <br/>
 <input
            type="number"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Quantity(in kilograms)"
            value={qua}
            onChange={(e)=>{setquantity(e.target.value)}}
          />
          <br/>
 <input
            fullWidth
            type="text"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Category"
            value={cat}
            onChange={(e)=>{setcategory(e.target.value)}}
          />
          {/* <select 
          style={{width:250,height:45,margin:5 ,background:"transparent",borderRadius:10}}
          >
            <option>Select the category</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Pulses</option>
          </select> */}
          <br/>
          <input
            fullWidth
            type="number"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Price(in rupees)"
            value={pri}
            onChange={(e)=>{setprice(e.target.value)}}
          />
          <br/>
          <input
            fullWidth
            type="text"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Farmer"
            value={qual}
            onChange={(e)=>{setquality(e.target.value)}}
          />
</span>
<span style={{width:400,textAlign:"left"}}>
<input
            fullWidth
            type="text"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Can you deliver them (yes/no)"
            value={del}
            onChange={(e)=>{setdeliverable(e.target.value)}}
          />
<input
            fullWidth
            type="text"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Description"
            value={des}
            onChange={(e)=>{setdescription(e.target.value)}}
          />
          <br/>
          <input
            fullWidth
            type="text"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Address"
            value={add}
            onChange={(e)=>{setaddress(e.target.value)}}
          />
          <br/>
          <input
            fullWidth
            type="text"
             style={{ padding: 25, margin: 5,background:"transparent",height:4,width:250,borderRadius:10  }}
            placeholder="Phone Number"
            value={pho}
            onChange={(e)=>{setphno(e.target.value)}}
          />
          <input type="file"
          value={pic}
          onChange={(e)=>{setpic(e.target.value)}}
          style={{ padding: 25, margin: 5,background:"transparent",height:10,width:300,borderRadius:10  }}/>
</span>
           </Stack>
         
          <br/>
          <Button
          variant="contained"
          style={{ marginTop: "30px",margin:"10px" }}
          color="secondary"
          onClick={rdata}
        >
          Reset
        </Button>
         <Button
          variant="contained"
          style={{ marginTop: "30px",margin:"10px" }}
          color="secondary"
          onClick={sdata}
        >
          Submit
        </Button>
         </div>
                </Paper>
            </center>
  )
}

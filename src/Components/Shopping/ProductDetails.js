import React from 'react'
import NavBar from '../Navbar/Navbar'
import Card from '@mui/material/Card'
import { Stack } from '@mui/system'
import Paddy from './paddy.jpg'
import CardMedia from '@mui/material/CardMedia'

const ProductDetails = (props) => {
  return (
    <center>
        <NavBar></NavBar>
        <Card style={{width:1200, minheight:200,padding:15,margin:35}}>
           <Stack direction="row" spacing={5}>
           <span style={{maxwidth:600}}>
        <h1>Product Details</h1>
       <Stack direction="row" spacing={5}>
       <span>
            <CardMedia sx={{ maxWidth: 250, borderRadius: 10, margin: 4, marginLeft: 5 }} component="img" alt="Venkat" height="250" image={Paddy} /> 

        </span>
        <span style={{maxwidth:200 ,padding:20,textAlign:'left'}}> <h4>Product name : {props.pname}</h4>
        <h4>Quantity : 250Kgs</h4>
        <h4>Category : Grains</h4>
        <h4>Price : 50 Rs\- per kg</h4>
        <h4>quality: Good</h4>
        <h4>Deliverable: <b style={{color:"green"}}>Yes</b></h4>
        </span>
       </Stack>
       <h4>Description: No pesticides used fully organic</h4>
       <h4>Images</h4>
            </span>
            <span style={{width:500}}>
<h1>
    Seller Details
</h1>
<Stack direction="row" spacing={5}>
<span style={{maxwidth:200 ,padding:20,textAlign:'left'}}>
<h3>
   Name: Promad Goutam
</h3>
<h3>
    Farmer details
</h3>
<p>
    Address : 85-1-6 
               near vinayaka temple
               Bommuru
               East Godavari
</p>
<h3>
    phone : 98855554
</h3>
</span>
<span>
<CardMedia sx={{ maxWidth: 150, borderRadius: 100, margin: 4, marginLeft: 5}} component="img" alt="Venkat" height="150" image={Paddy}  />
</span>
</Stack>

            </span>
           </Stack>
        </Card>
    </center>
  )
}

export default ProductDetails
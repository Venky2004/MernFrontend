import React from 'react'
import Card from '@mui/material/Card'
import mypic from './Images/PG.jpg';
import { CardMedia } from '@mui/material';
const Farmer = () => {
  return (
    <div>
        <Card>
            <h1>TODAY'S FARMER'S STORY: PRAMOD GAUTAM</h1>
            <center> <CardMedia sx={{ maxWidth: 250, borderRadius: 100, border: '5px inset white', margin: 4, marginLeft: 5 }} component="img" alt="Venkat" height="250" image={mypic} /> 
            <p>
            Pramod Gautam – Successful Horticulture Farmer
            In 2006, he chose his career in farming and switched from automobile engineer.
            After facing many problems, he switched to modern farm equipment. 
            His annual turnover is 1 crores and additional approx Rs. 12 lakhs from agriculture.  
            </p>
            </center>
        </Card>
    </div>
  )
}

export default Farmer
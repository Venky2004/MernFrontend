import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ComputerScience, Electrical, Mechanical, BioTech } from './data';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';

const Intro= () => {
   const [dept, setDept] = useState(ComputerScience)
  const changeView = (dep) => { setDept(dep); }
   return(
   <div>
   <Grid container spacing={1}>
        <Grid item xs={10} style={{zIndex:10}}>
      <h1>{dept[0].displayName}</h1>
      <p>{dept[0].description} </p>
      <p>HOD:{dept[0].hod}</p>
      <h4 style={{ textAlign: "left" }}>Programs Offered:</h4>
      <p style={{ textAlign: "left" }} >{dept[0].programsOffered}</p>
      </Grid>
      <Grid item xs={2} style={{backgroundColor:"whitesmoke",zIndex:5}} >
        <Button variant="text" size='large' margin={5} color="secondary" onClick={() => changeView(ComputerScience)} >Agriculture</Button>
        <br/>
        <Button variant="text" size='large' margin={5} color="secondary" onClick={() => changeView(Electrical)} >How to ?</Button>
        <br/>
        <Button variant="text" size='large' margin={5} color="secondary" onClick={() => changeView(Mechanical)} >Aquaculture</Button>
        <br/>
        <Button variant="text" size='large' margin={5} color="secondary" onClick={() => changeView(BioTech)} >BT</Button>
        </Grid>
      </Grid>
</div>)
}
export default Intro
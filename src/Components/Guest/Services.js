import React from 'react'
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import CssBaseline from '@mui/material/CssBaseline';

const Services = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <NavBar />
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          Services we provide in our website
        </Typography>
        <Typography variant="h5" align="center" color="white" component="p">
          We provide interaction platform between the farmers.
          Farmers can get about daily prices of the products.

        </Typography>
      </Container>
      </React.Fragment>
  );
}

export default function Servicespro(){
  return <Services />;
}


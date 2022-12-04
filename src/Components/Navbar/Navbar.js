import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { ListItem, ListItemText } from "@mui/material";
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import ForestIcon from '@mui/icons-material/Forest';
import Checkout from "../Checkout/Checkout";
import Shopping from "../Shopping/Shopping";
import ContactUs from "../ContactUs/Contactus";
import Feedbacks from '../Admin/Feedbacks';
import Button from '@mui/material/Button';
import { useEffect } from 'react';


import { useNavigate } from "react-router-dom";
import DashBoard from '../Dashboard/OrderTable';
import Buyers from '../Buyers/Buyers';
import Sellers from '../Sellers/Sellers';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
import Aboutus from '../Aboutus/AboutUs';
import Feedback from '../Feedback/Feedback';
import GoogleTranslate from '../../Googletranslate';

function ScrollTop(props) {
  
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
   }   
   useEffect(() => {
     var addScript = document.createElement('script');
     addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
     document.body.appendChild(addScript);
     window.googleTranslateElementInit = googleTranslateElementInit;
   }, [])
  var data = jwt_decode(Cookies.get('token'));
  const navigate=useNavigate(false)
  console.log(data);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{backgroundColor:"black"}}>
        
        <Toolbar>
        <List sx={{display:"flex",alignItems:"center"}}>
        <List sx={{display:"flex",alignItems:"center"}}>
          <ForestIcon sx={{translate:"2px"}}/>
          <Typography variant="h6" component="div" marginRight={5}>
            Green Revolution
          </Typography>
          </List>
          <List sx={{display:"flex"}}>      
            {data.userRole==='Farmer'&&<>
              <ListItem onClick={() => {
                  navigate("/dashboard");
                }}>
                <ListItemText><Button variant="text" startIcon={<DashboardIcon />} style={{color:"white"}}>
  {/* Dashboard */}
</Button></ListItemText>        
              </ListItem>
                    <ListItem button  onClick={() => {
                  navigate("/shopping");
                }}>
                <ListItemText><Button variant="text" startIcon={<ShoppingBagIcon/>} style={{color:"white"}}>Shop</Button></ListItemText>        
              </ListItem>
              <ListItem button  onClick={() => {
                  navigate("/checkout");
                }}>
                <ListItemText><Button variant="text" startIcon={<HelpCenterIcon/>} style={{color:"white"}}>Help</Button></ListItemText>        
              </ListItem>
              <ListItem button  onClick={() => {
                  navigate("/contactus");
                }}>
                <ListItemText><Button variant="text" startIcon={<ContactPageIcon/>} style={{color:"white"}}>ContactUs</Button></ListItemText>        
              </ListItem>
              <ListItem button  onClick={() => {
                  navigate("/feedback");
                }}>
                <ListItemText><Button variant="text" startIcon={<FeedbackIcon/>} style={{color:"white"}}>Feedback</Button></ListItemText>        
              </ListItem>
              <ListItem button  onClick={() => {
                Cookies.remove('token')
                  navigate("/");
                }}>
                <ListItemText><Button variant="text" startIcon={<LogoutIcon/>} style={{color:"white"}}>LogOut</Button></ListItemText>      
              </ListItem>
              </>
              }
          
          {data.userRole==='Admin'&&<>
                    <ListItem button  onClick={() => {
                  navigate("/sellers");
                }}>
                <ListItemText primary="Users"/>        
              </ListItem>
              <ListItem button  onClick={() => {
                  navigate("/buyers");
                }}>
                <ListItemText primary="Admin"/>        
              </ListItem>
              <ListItem button  onClick={() => {
                  navigate("/viewfeedbacks");
                }}>
                <ListItemText primary="View Feedbacks"/>        
              </ListItem>
              <ListItem button  onClick={() => {
                 Cookies.remove('token')
                  navigate("/");
                }}>
                <ListItemText primary="LogOut"/>        
              </ListItem>
              </>
              }
          
            </List>
            <List>
            <div id="google_translate_element"></div>  
            </List>
        </List>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
        {props.checkout && <Checkout/>}
        {props.shopping && <Shopping/>}
        {props.dashboard && <DashBoard/>}
        {props.contactus && <ContactUs/>}
        {props.feedback && <Feedback/>}

        {props.buyers && <Buyers/>}
        {props.sellers && <Sellers/>} 
        {props.viewfeedbacks && <Feedbacks/>}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

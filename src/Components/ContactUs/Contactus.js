import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import {Rating} from '@mui/material';
import Box from '@mui/material/Box';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Navbar from '../../Components/Navbar/Navbar';
import SendIcon from '@mui/icons-material/Send';
import './ContactUs.css';

function Contactus() {
  return (
    <div style={{backgroundColor: 'white',minHeight: 'auto'}} className="bsg"> 
      <Navbar/>
      <br />
      <br />
    <br/>
      <div className="contact_info" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between bgm">
              {/* Phone Number */}
              <div className="contact_info_item d-flex-1 justify-content-start align-items-center msg">
                  <PhoneIphoneTwoToneIcon fontSize="large"/>
                  <div className="contact_info_content">
                    <div className="contact_info_title">
                      <b>Phone</b>
                    </div>
                    <div className="contact_info_text">
                      +91 9963860465
                    </div>
                  </div>
              </div>

              {/* Email */}
              <div className="contact_info_item d-flex-1 justify-content-start align-items-center msg">
                 <EmailTwoToneIcon fontSize="large" />
                  <div className="contact_info_content">
                    <div className="contact_info_title">
                      <b>EMAIL</b>
                    </div>
                    <div className="contact_info_text">
                      farmers.official08@gmail.com
                    </div>
                  </div>
              </div>

              {/* Address */}
              <div className="contact_info_item d-flex-1 justify-content-start align-items-center msg">
                  <HomeTwoToneIcon fontSize="large" />
                  <div className="contact_info_content">
                    <div className="contact_info_title">
                      <b>Address</b>
                    </div>
                    <div className="contact_info_text">
                      KL UNIVERSITY VADDESWARAM
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
<br />
<br />
      {/* contact us */}

    <center>
    <div className="contact_form nsg">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">
                  <h3><b>GET IN TOUCH WITH US</b></h3>
                </div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                      <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your Name" required="true" />

                      <input type="email" id="contact_form_email" className="contact_form_email input_field" placeholder="Your Email" required="true" />

                      <input type="number" id="contact_form_phone" className="contact_form_phone input_field" placeholder="Your Phone Number" required="true" />

                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea className="text-field contact_form_message" placeholder="Message" cols="80" rows="5"></textarea>
                  </div>
                  <div className="contact_form_button">
                  <Button type="submit" variant="contained" startIcon={<SendIcon />} className="button contact_submit_button">
                                    Submit
                                          </Button>
                                          {/* <button type="submit" className="button contact_submit_button">Submit</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
<br />
<br /><br /><br /><br /><br />
    </div>
  );
}

export default Contactus;
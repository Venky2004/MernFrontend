import React from 'react'
import NavBar from '../Guest/NavBar';
import ab from './Images/f2.jpg';
import tg from './Images/g2.jpg';
import gf from './Images/Naruto.png';
import dc from './Images/google.png';
import ef from './Images/facebook.png';
import gh from './Images/instagram.png';
import jk from './Images/twitter.png';
import { Button} from '@mui/material';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div> <NavBar />
         <br />
        <div className="row text">
           
            <div className="col-md-3"></div>
            <div className="col-md-4">
           <div style={{width:'800px',align:'center'}} className="Profilecard">
                    <div className="row" style={{padding:20}}>
                    <div className="col-md-1"></div>
                        <div className="col-md-4 profilepic" style={{paddingTop: '10px'}}>
                            <img src={tg} alt="profile" width="150" height="150"/>
                        </div>
                        <div className="col-md-7" style={{paddingTop:'15px'}}>
                            <h3><b>Durga Jayasai</b></h3><br />
                            <h5>Web-Developer</h5><br />
                            <h6><i>"If you think math is hard, try web design"</i></h6>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-3" style={{padding: '10px', paddingLeft:10}}>
                            <div><b>WORK LINKS</b></div><br />
                            <div className="links">
                                <a href="https://www.linkedin.com/in/durga-jayasai-pillagolla-863828235/" target="_blank">LinkedIn</a>
                            </div>
                            <div>
                                <a href="https://twitter.com/introvert_08_7?t=I7_tVcRoa3Nh5aCiNv4_gA&s=09" target="_blank">Twitter</a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/@dongamoham2730/about" target="_blank">YouTube</a>
                            </div>
                            <div>
                                <a href="https://instagram.com/durga_jayasai?igshid=YmMyMTA2M2Y=" target="_blank">Instagram</a>
                            </div>
                            
                        </div>
                        <div className="col-md-8">
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Name</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >Durga Jayasai</p>
                                 </div>
                            </div>   
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Email</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >durgajayasai12345@gmail.com</p>
                                 </div>
                            </div>  
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Phone Number</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >9963860465</p>
                                 </div>
                            </div> 
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Role</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >Member</p>
                                 </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Profession</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p style={{color: 'red' }}><b>Web Developer</b></p>
                                 </div>
                            </div> 
                        </div>
                    </div>
           </div><br/><br />
           <div style={{width:'800px',align:'center'}} className="Profilecard">
                    <div className="row" style={{padding:20}}>
                    <div className="col-md-1"></div>
                        <div className="col-md-3 profilepic" style={{paddingTop: '10px'}}>
                            <img src={gf} alt="profile" width="150" height="150"/>
                        </div>
                        <div className="col-md-8" style={{paddingTop:'15px'}}>
                            <h3><b>Venkat Sai Ram Reddy</b></h3><br />
                            <h5>Front-End Developer</h5><br />
                            <h6><i>"Design is not just what it looks like, design is how it works.."</i></h6>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-3" style={{padding: '10px', paddingLeft:10}}>
                            <div><b>WORK LINKS</b></div><br />
                            <div className="links">
                                <a href="https://www.linkedin.com/in/durga-jayasai-pillagolla-863828235/" target="_blank">LinkedIn</a>
                            </div>
                            <div>
                                <a href="https://twitter.com/introvert_08_7?t=I7_tVcRoa3Nh5aCiNv4_gA&s=09" target="_blank">Twitter</a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/@dongamoham2730/about" target="_blank">YouTube</a>
                            </div>
                            <div>
                                <a href="https://instagram.com/durga_jayasai?igshid=YmMyMTA2M2Y=" target="_blank">Instagram</a>
                            </div>
                            
                        </div>
                        <div className="col-md-8">
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Name</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p>Venkat Sai Ram Reddy</p>
                                 </div>
                            </div>   
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Email</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >venkatsairamreddy0404@gmail.com</p>
                                 </div>
                            </div>  
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Phone Number</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >6301115915</p>
                                 </div>
                            </div> 
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Role</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >Member</p>
                                 </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Profession</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p style={{color: 'red' }}><b>Web-Designer</b></p>
                                 </div>
                            </div> 
                        </div>
                    </div>
           </div><br /><br />
           <div style={{width:'800px',align:'center'}} className="Profilecard">
                    <div className="row" style={{padding:20}}>
                    <div className="col-md-1"></div>
                        <div className="col-md-3 profilepic" style={{paddingTop: '10px'}}>
                            <img src={dc} alt="profile" width="150" height="150"/>
                        </div>
                        <div className="col-md-8" style={{paddingTop:'15px'}}>
                            <h3><b>Sohan Tummalapali</b></h3><br />
                            <h5>AI & Data Scientist</h5><br />
                            <h6><i>"No data is clean, but most is useful"</i></h6>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-3" style={{padding: '10px', paddingLeft:10}}>
                            <div><b>WORK LINKS</b></div><br />
                            <div className="links">
                                <a href="https://www.linkedin.com/in/durga-jayasai-pillagolla-863828235/" target="_blank">LinkedIn</a>
                            </div>
                            <div>
                                <a href="https://twitter.com/introvert_08_7?t=I7_tVcRoa3Nh5aCiNv4_gA&s=09" target="_blank">Twitter</a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/@dongamoham2730/about" target="_blank">YouTube</a>
                            </div>
                            <div>
                                <a href="https://instagram.com/durga_jayasai?igshid=YmMyMTA2M2Y=" target="_blank">Instagram</a>
                            </div>
                            
                        </div>
                        <div className="col-md-8">
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Name</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >Sohan Tummalapalli</p>
                                 </div>
                            </div>   
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Email</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >sohan1600831@gmail.com</p>
                                 </div>
                            </div>  
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Phone Number</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >7603845103</p>
                                 </div>
                            </div> 
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Role</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p >Member</p>
                                 </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label><b>Profession</b></label>
                                 </div>
                                 <div className="col-md-6">
                                    <p style={{color: 'red' }}><b>Backend Developer</b></p>
                                 </div>
                            </div> 
                        </div>
                    </div>
           </div><br /><br />
           </div>
        </div>
        </div>
    )
}

export default AboutUs
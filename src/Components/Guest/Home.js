import React from 'react'
import './Home'
import Typewriter from "typewriter-effect";
export const Home = () => {
  return (
    <div className='intro'>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <center><h1><Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("MERN STACK SDP Project Team-03")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Welcomes You to")
  .deleteAll()
  .typeString("Agriculture & Aquaculture Systems")
  .start();
  }}
  />
          </h1></center>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    </div>
  )
}

import React from 'react'
import '../../css/style.css'
import NavBar from './NavBar'
import Weather1 from './Weather1'
// import Farmer from './Farmer'
import Intro from './Intro'
import './Guest.css'
import { Home } from './Home'

const Guest = () => {
  return (
            <div className='ripple-background' style={{maxheigth:800}}>
              <NavBar />
  <div className='circle xxlarge shade1'></div>
  <div className='circle xlarge shade2'></div>
  <div className='circle large shade3'></div>
  <div className='circle medium shade4'></div>
  <div className='circle small shade5'></div>
  <Home/>
</div>
  )
}

export default Guest
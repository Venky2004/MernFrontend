import './App.css';
import Login from '../src/Components/Login/Login';
import Signup from './Components/Register/Signup';
import ContactUs from './Components/ContactUs/Contactus';
import Services from './Components/Guest/Services'
import Guest from './Components/Guest/Guest';
import Weather1 from './Components/Guest/Weather1';
import AboutUs from './Components/Aboutus/AboutUs';
import ProductDetails from './Components/Shopping/ProductDetails';
import {Router,Routes,Route} from 'react-router-dom'
import Navbar from '../src/Components/Navbar/Navbar';
import Canari from '../src/Components/Chatbot/Canari'
import "./fonts/Kusanagi.otf"
function App() {
  return (
  <div className="App">
    <Routes>
        <Route path='/contactus' element={<><ContactUs /></>}/>
      <Route path='/login' element={<><Login /></>}/>
      <Route path='/register' element={<><Signup /></>}/>
      <Route path='/weather' element={<Weather1/>}/>
      <Route exact path='/dashboard' element={<><Navbar dashboard={true}/></>}/>
      <Route exact path="/checkout" element={<><Navbar checkout={true}/></>}/>
      <Route exact path="/shopping" element={<><Navbar shopping={true}/></>}/>
      <Route exact path="/feedback" element={<><Navbar feedback={true}/></>}/>
      <Route exact path="/buyers" element={<><Navbar buyers={true}/></>}/>
      <Route exact path="/sellers" element={<><Navbar sellers={true}/></>}/>
      <Route exact path="/viewfeedbacks" element={<><Navbar viewfeedbacks={true}/></>}/>
      <Route path='/' element={<Guest/>}/>
      <Route path='/AboutUs' element={<AboutUs />} />
    <Route path='/Services' element={<Services />} />
    <Route path='/ProductDetails' element={<ProductDetails/>}/>
    </Routes>
  <Canari/>
    <br/><br/>
    </div>
  );
}

export default App;

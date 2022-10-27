import React from 'react'
import './Home.css'
import videoBg from '../../Images/background-vid.mp4'
import Timer from '../../Components/Timer/Timer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Events from '../../Pages/Events/Events';
import OrgBy from '../../Pages/OrgBy/OrgBy';

function Home() {
  return (
    <div className="outer-all">
      <Navbar />
      <div className="outer-div" id="hme">
        <div className="overlay"></div>
        <video className="video-background" src={videoBg} autoPlay loop muted></video>
        <div className="content">
            <div className="text-div">
                <h1 className="main-text">
                    RENDEZVOUS
                    <p className='year'> 2K22</p>
                </h1>
            </div>
            <Timer />
            <div className="arrow">
              <a href="#"><KeyboardArrowDownIcon fontSize="large"/></a>
            </div>
        </div>
      </div>
      <OrgBy />
      <About />
      <Events />
      <Contact />
    </div>
  )
}

export default Home
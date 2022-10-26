import React from 'react'
import './Home.css'
import {motion} from 'framer-motion'
import videoBg from '../../Images/background-vid.mp4'
import Timer from '../../Components/Timer/Timer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home() {
  return (
    <div className="outer-div">
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
  )
}

export default Home
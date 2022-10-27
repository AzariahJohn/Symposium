import React, {useState} from 'react'
import './Events.css'
import {motion} from 'framer-motion'
import Backdrop from './Backdrop'
import {  Link } from "react-router-dom";

function Events() {
  return (
    <div className="events-outer-container" id="evt">
        <h3 className='events-title'>Events</h3>
        <div className="events-card-container">
          <Link to="/paper-presentation"><Card name="Paper Presentation"/></Link>
          <Link to="/tech-hunt"><Card name="Tech Hunt"/></Link>
          <Link to="/bid-and-discuss"><Card name="Bid And Discuss"/></Link>
          <Link to="/unwrap-the-story"><Card name="Unwrap The Story"/></Link>
          <Link to="/need-for-speed"><Card name="Need For Speed"/></Link>
          <Link to="/green-screen"><Card name="Green Screen"/></Link>
        </div>
    </div>
  )
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 500,
    }
  },
  exit: {
    y: "100vh",
    opacity: 0,
  }
}

function Card(props){

  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(false);
  const close = () => setModalOpen(true);

  return(
    <div className="card-container" 
      onClick={() => (modalOpen ? close() : open())}
    >
      <h1>{props.name}</h1>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>  
  )
}

function Modal({ handleClose, text }) {
  return(
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.StopPropogation()}
          className="modal-events"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p>{text}</p>
          <button onClick={handleClose}>Register</button>
        </motion.div>
    </Backdrop>
  )
}

export default Events
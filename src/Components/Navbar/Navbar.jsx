import React, {useState} from 'react'
import './Navbar.css'
import {motion} from "framer-motion"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

    const [show, setShow] = useState(true)
    const variants = {
        open: {opacity: 0, x: 0,},
        close: {opacity: 0, x: '-100%'}
    }

  return (
    <div>
        <div className="navbar-container">
            <div className="title">
                <h3 className="title-text">
                    RMDEC
                </h3>
            </div>
            <div className="navelements-container">
                <ul className="list-items">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Register</a></li>   
                </ul>
            </div>
        </div>
        <div className="small-nav">
            <motion.nav 
                animate={show ? "open" : "closed"}
                variants={variants}
                transition={{duration: 0.1}}
            >
                <motion.div className='inner-nav'>
                    <ul className='ul-element'>
                        <motion.li className='li-element' whileHover={{backgroundColor: '#005671'}}>
                            <a className="anc-element" href="#" onClick={() => setShow(show => !show)}>Home</a>
                        </motion.li>
                        <motion.li className='li-element' whileHover={{backgroundColor: '#005671'}}>
                            <a className="anc-element" href="#" onClick={() => setShow(show => !show)}>About</a>
                        </motion.li>
                        <motion.li className='li-element' whileHover={{backgroundColor: '#005671'}}>
                            <a className="anc-element" href="#" onClick={() => setShow(show => !show)}>Events</a>
                        </motion.li>
                        <motion.li className='li-element' whileHover={{backgroundColor: '#005671'}}>
                            <a className="anc-element" href="#" onClick={() => setShow(show => !show)}>Contact</a>
                        </motion.li>
                        <motion.li className='li-element' whileHover={{backgroundColor: '#005671'}}>
                            <a className="anc-element" href="#" onClick={() => setShow(show => !show)}>Register</a>
                        </motion.li>
                    </ul>
                </motion.div>
            </motion.nav>
            <motion.button
                className='toggle'
                onClick={() => setShow(show => !show)}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                {show ? <MenuIcon /> : <CloseIcon />}
            </motion.button>
        </div>
    </div>

  )
}

export default Navbar
import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-container" id="cnt">
        <div className="register-div">
            <button className="reg-btn">Register</button>
        </div>
        <div className="instructions">
            <div className="ins-title-container">
                <h1 className="instruction-title">Instructions</h1>
            </div>
            <div className="ins-content">
                <p>Registrations are made only through online and no spot registration.</p>
                <p>All Students must bring their college ID Card</p>
                <p>Students are asked to come in formal dress</p>
                <p>Online Registration closes on 26th January 2020</p>
                <p>One registration per team is sufficient.</p>
                <p>Two seperate dropdown of events are present for registration.</p>
                <p>Fee To Register</p>
            </div>
        </div>
        <div className="contact-details">
            <div className="instagram"></div>
            <div className="phone"></div>
            <div className="linkedin"></div>
            <div className="email"></div>
        </div>
    </div>
  )
}

export default Contact
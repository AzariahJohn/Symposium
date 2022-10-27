import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'

function TechHunt() {
  return (
    <div className="outer-event-div">
      <div className="navbar-adjust">
        <Navbar />
      </div>
      <div className="event-name-div">
        <h1 className="title-event">Tech Hunt</h1>
      </div>
      <div className="rules-and-regulations">
        <p>Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Perspiciatis veritatis eligendi 
        sapiente tenetur provident hic quae error obcaecati 
        dolor labore, in fuga quibusdam enim voluptas dolores 
        soluta illo accusantium optio magni necessitatibus 
        libero distinctio. Repellat quas cupiditate, odit 
        vel modi ut delectus nobis aut earum aliquam natus 
        minima optio maxime.</p>
      </div>
      <button className="reg-btn">Register</button>
    </div>
  )
}

export default TechHunt
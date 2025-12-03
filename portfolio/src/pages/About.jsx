import React from 'react'
import aboutImage from '../assets/images/aboutMe.png';
import '../styles/About.css'
export const About = () => {
  return (
    <section className="about-container">

        <div className="about-content-text">

            <h1>ABout <br /> Me</h1>
            <p>👋, My name is <br /> <span>Ralph Kineth ugdamin</span></p>
        </div>

        <div className="image-container">
            <img src={aboutImage} alt="about image" />
        </div>

       <div className="subtext">

        <h1>WEb <br />developer</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Et similique necessitatibus labore quo nemo error iste ullam ab u
             t accusamus officia vitae cum inventore corporis ea eum ipsa eligendi
             quas dolores, obcaecati at aliquam suscipit. Magni accusamus
              labore nemo pariatur?</p>
       </div>
    </section>
  )
}

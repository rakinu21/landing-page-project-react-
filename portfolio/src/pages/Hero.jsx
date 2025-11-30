import React from 'react'
import heroImage from '../assets/images/heroImage.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import '../styles/Hero.css'
export const Hero = () => {
  return (
    <section className="hero">

        <div className="text-content">

            <h1> <span>EXPLORE </span> MY <br/>POR<span>TFOLIO</span></h1>
        </div>

       
       <div className="image-container-and-subtext">

              <div className="subtext-skills">
               <p>  Web developer</p>

             <ul>
              <li>web design</li>
              <li> landing page</li>
              <li>frontend developer</li>
              <li>backend developer</li>
             </ul>
          </div>
         
          <div className="image-container">
                   <img src={heroImage} alt="hero-image" />
          </div>
      

          <p>I am Passionate About <br />creating websites <br /> that stand out <br />from the crown</p>

           
       </div>
        

        <div className="button-container">
             
              <ul className="social-list">
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </li>

        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
             <button className='download-btn'>download cv</button>
           </div>
         
    </section>
  )
}

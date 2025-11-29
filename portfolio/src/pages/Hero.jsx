import React from 'react'
import heroImage from '../assets/images/heroImage.png'
import '../styles/Hero.css'
export const Hero = () => {
  return (
    <section className="hero">

        <div className="text-content">

            <h1>EXPLORE MY <br/> PORTFOLIO</h1>
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

         
    </section>
  )
}

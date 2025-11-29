
import { useState } from 'react'
import './App.css'
import { IndexNavbar } from './components/Navbar/IndexNavbar'
import menu from './server/Menu.js'
import {Routes , Route} from 'react-router-dom'
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { Hero } from './pages/Hero.jsx'
function App() {


  const [toggleNav , setToggle] = useState(false)

  return (
     <section className="app-container">
          <div className={`button-toggle ${toggleNav ? "button-open" : ""}`} onClick={()=> setToggle (!toggleNav)}>
              {
                toggleNav ?<TbArrowBadgeLeft /> :<TbArrowBadgeRight />
              }
          </div>

          <div className={`sidebar ${toggleNav ? "open" : ""}`}>
          <IndexNavbar menus={menu}/>
        </div>

      <main className='main-content'>
       <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/about/skills" element={<h1>Skills Page</h1>} />
          <Route path="/about/experience" element={<h1>Experience Page</h1>} />

          <Route path="/projects" element={<h1>Projects Page</h1>} />
          <Route path="/projects/web-apps" element={<h1>Web Apps</h1>} />
          <Route path="/projects/mobile-apps" element={<h1>Mobile Apps</h1>} />
          <Route path="/projects/designs" element={<h1>Designs</h1>} />

          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/services/web-development" element={<h1>Web Dev</h1>} />
          <Route path="/services/brand-design" element={<h1>Brand Design</h1>} />

          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </main>
     </section>
  )
}

export default App

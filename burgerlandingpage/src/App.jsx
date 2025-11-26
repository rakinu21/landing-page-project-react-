
import './App.css'
import { Navbar } from './components/Navbar'
import { FeaturedSection } from './pages/FeaturedSection.JSX'
import { Hero } from './pages/Hero'
import { Promo } from './pages/Promo'

function App() {


  return (
     <section className="main">

      <Navbar/>


      <div className="main-container">

          <Hero/>
          <FeaturedSection/>
          <Promo/>
      </div>
     </section>
  )
}

export default App

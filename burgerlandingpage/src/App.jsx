
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { FeaturedSection } from './pages/FeaturedSection.JSX'
import { Hero } from './pages/Hero'
import { Promo } from './pages/Promo'
import { Testemonial } from './pages/Testemonial'

function App() {


  return (
     <section className="main">

      <Navbar/>


      <div className="main-container">

          <Hero/>
          <FeaturedSection/>
          <Promo/>
          <Testemonial/>
          <Footer/>
      </div>
     </section>
  )
}

export default App

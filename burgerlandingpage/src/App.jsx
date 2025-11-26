
import './App.css'
import { Navbar } from './components/Navbar'
import { FeaturedSection } from './pages/FeaturedSection.JSX'
import { Hero } from './pages/Hero'

function App() {


  return (
     <section className="main">

      <Navbar/>


      <div className="main-container">

          <Hero/>
          <FeaturedSection/>
      </div>
     </section>
  )
}

export default App

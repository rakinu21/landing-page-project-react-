
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './pages/Hero'

function App() {


  return (
     <section className="main">

      <Navbar/>


      <div className="main-container">

          <Hero/>

      </div>
     </section>
  )
}

export default App

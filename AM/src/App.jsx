import './App.css'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './layouts/Footer'

function App() {
  return (
    <div className="modern-bg">
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <Navbar />
      {/* Main Content */}
      <div className="content-wrapper">
        <main className="min-h-screen pt-20">
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="services" className="min-h-screen">
        <Services />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
     </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

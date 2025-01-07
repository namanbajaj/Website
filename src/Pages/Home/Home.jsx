import About from './components/About/components/About'
import Contact from './components/Contact/components/Contact'
import Footer from '../../Shared/Footer/Footer'
import Portfolio from './components/Portfolio/components/Portfolio'
import Welcome from './components/Welcome/components/Welcome'
import Experience from './components/Experience/components/Experience'
import Languages from './components/Languages/components/Languages'
import Certifications from './components/Certifications/components/Certifications'

const Home = () => {
  return (
    <>
      <Welcome />
      <About/>
      <Experience />
      <Languages />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;
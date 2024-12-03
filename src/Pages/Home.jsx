import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Portfolio from '../components/Portfolio/Portfolio'
import Welcome from '../components/Welcome/Welcome'
import Experience from '../components/Experience/Experience'
import Languages from '../components/Languages/Languages'
import Certifications from '../components/Certifications/Certifications'

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
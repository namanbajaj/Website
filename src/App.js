import logo from './logo.svg';
import './App.css';

import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Naman Bajaj <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;

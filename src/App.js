import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Experience from './components/Experience/experience';
import Links from './components/Links/Links'

function App() {
  return (
    <div className="App">
        <NavBar />
      <section id="home">
        <Hero />
      </section>
      <hr className='divider'></hr>
      <section id="about">
        <h2>ABOUT</h2>
        <About />
      </section>
      <hr className='divider'></hr>
      <section id="experience">
        <h2>EXPERIENCE</h2>
        <Experience />
      </section>    
      <hr className='divider'></hr>
      <section id="links">
        <h2>LINKS</h2>
        <Links />
      </section>
      <span className='blank'>learn react</span>
    </div>
  );
}

export default App;

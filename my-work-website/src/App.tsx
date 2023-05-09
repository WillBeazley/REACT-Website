import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './App.css';
import 'tailwindcss/tailwind.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    document.title = 'William Beazley';
    AOS.init();
  }, []);

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">

      <NavBar/>

      <Home/>

      <Skills/>

      <Projects/>

      <Footer/>

    </div>
  );
}

export default App;
